import {createStore} from 'vuex';
import {shallowMount} from '@vue/test-utils';
import {getEntriesByTerm} from '@/modules/daybook/store/journal/getters';
import EntryList from '@/modules/daybook/components/EntryList';
import {journalState} from '../../../mock-data/test-journal-state';

describe('Tests on entryList', () => {
    const journalMockModule = {
        namespaced: true,
        getters: {
            getEntriesByTerm
        },
        state: () => ({
            isLoading: false,
            entries: journalState.entries
        })
    };

    const store = createStore({
        modules: {
            journal: {...journalMockModule}
        }
    });
    const mockRouter = {
        push: jest.fn(),
    }

    const wrapper = shallowMount(EntryList, {
        global: {
            mocks: {
                $router: mockRouter
            },
            plugins: [store]
        }
    });
    test('Must call getEntriesByTerm without term and show two entries', () => {
        expect(wrapper.findAll('entry-stub').length).toBe(2);
    });
});