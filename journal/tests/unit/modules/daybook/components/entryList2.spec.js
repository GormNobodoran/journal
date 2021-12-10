import {createStore} from 'vuex';
import {shallowMount} from '@vue/test-utils';
import EntryList from '@/modules/daybook/components/EntryList';
import {journalState} from '../../../mock-data/test-journal-state';
import journalModule from '../../../../../src/modules/daybook/store/journal';

const createVuexStore = (initialState) => createStore({
    modules: {
        journal: {
            ...journalModule, state: {...initialState}
        }
    }
});

describe('Tests on entryList', () => {
    const store = createVuexStore(journalState);

    const mockRouter = {
        push: jest.fn()
    };

    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallowMount(EntryList, {
            global: {
                mocks: {
                    $router: mockRouter
                }, plugins: [store]
            }
        });
    });

    test('Must call getEntriesByTerm without term and show two entries', () => {
        expect(wrapper.findAll('entry-stub').length).toBe(2);
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Must call getEntriesByTerm and filter entries', async () => {
        const input = wrapper.find('input');
        await input.setValue('mock1');

        expect(wrapper.findAll('entry-stub').length).toBe(1);
    });

    test('New button must redirect to /new', async() => {
        await wrapper.find('button').trigger('click');
        expect(mockRouter.push)
            .toHaveBeenCalledWith({name: 'entry', params: {id: 'new'}});
    });
});