import {shallowMount} from '@vue/test-utils';
import Entry from '@/modules/daybook/components/Entry.vue';
import {journalState} from '../../../mock-data/test-journal-state';

describe('Tests on Entry component', () => {
    let wrapper;
    let mockRouter;
    beforeEach(() => {
        mockRouter = {
            push: jest.fn()
        };
        wrapper = shallowMount(Entry, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            },
            props: {
                entry: journalState.entries[0]
            }
        });
    });
    test('Should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Must redirect when click on entry-container', async() => {
        await wrapper.find('.entry-container').trigger('click');
        expect(mockRouter.push).toHaveBeenCalledWith({name: 'entry', params: {id: journalState.entries[0].id}});
    });

    test('Tests on computed properties', () => {
        expect(typeof wrapper.vm.day).toBe('number');
        expect(wrapper.vm.day).toBe(6);
        expect(wrapper.vm.month).toBe('Diciembre');
        expect(wrapper.vm.yearDay).toBe('2021, Lunes');
    });
});