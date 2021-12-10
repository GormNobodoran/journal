import {createStore} from 'vuex';
import {shallowMount} from '@vue/test-utils';
import EntryView from '@/modules/daybook/views/EntryView';
import journalModule from '@/modules/daybook/store/journal';
import Swal from 'sweetalert2';
import {journalState} from '../../../mock-data/test-journal-state';

const createVuexStore = (initialState) => createStore({
    modules: {
        journal: {
            ...journalModule, state: {...initialState}
        }
    }
});

jest.mock('sweetalert2', () => ({
    fire: jest.fn(), showLoading: jest.fn(), close: jest.fn()
}));

describe('tests on entryView', () => {
    const store = createVuexStore(journalState);
    store.dispatch = jest.fn();

    const mockRouter = {
        push: jest.fn()
    };

    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallowMount(EntryView, {
            props: {
                id: journalState.entries[0].id
            }, global: {
                mocks: {
                    $router: mockRouter
                }, plugins: [store]
            }
        });
    });

    test('Given invalid ID should move user to no-entry', () => {
        const wrapper = shallowMount(EntryView, {
            props: {
                id: 'bad-id'
            }, global: {
                mocks: {
                    $router: mockRouter
                }, plugins: [store]
            }
        });

        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'});
    });

    test('Given a valid Id has to show the valid entry', () => {
        expect(wrapper.html()).toMatchSnapshot();
        expect(mockRouter.push).not.toHaveBeenCalled();
    });

    test('Given a click on delete button, should delete entry and exit', async () => {
        Swal.fire.mockReturnValueOnce(Promise.resolve({isConfirmed: true}));

        await wrapper.find('.btn-danger').trigger('click');

        expect(Swal.fire).toHaveBeenCalledWith({
            title: '¿Estás seguro?',
            text: 'Una vez borrado, no se puede recuperar',
            showDenyButton: true,
            confirmButtonText: 'Si, estoy seguro'
        });

        expect(mockRouter.push).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith('journal/deleteEntry', journalState.entries[0].id);
    });
});