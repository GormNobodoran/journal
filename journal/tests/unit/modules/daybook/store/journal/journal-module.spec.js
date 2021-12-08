import {createStore} from 'vuex';
import journalModule from '@/modules/daybook/store/journal';
import {journalState} from '../../../../mock-data/test-journal-state';

const createVuexStore = (initialState) => createStore({
    modules: {
        journal: {
            ...journalModule,
            state: {...initialState}
        }
    }
});

describe('Vuex- Test on Journal Module', () => {
    test('Initial state must be this', () => {
        const store = createVuexStore(journalState);
        const {isLoading, entries} = store.state.journal;

        expect(isLoading).toBeFalsy();
        expect(entries).toEqual(journalState.entries);
    });

    //Mutations
    test('Mutation: setEntries', () => {
        const store = createVuexStore({isLoading: true, entries: []});
        store.commit('journal/setEntries', journalState.entries);

        expect(store.state.journal.entries.length).toBe(2);

        store.commit('journal/setEntries', journalState.entries);

        expect(store.state.journal.entries.length).toBe(4);
    });

    test('Mutation: stopLoading', () => {
        const store = createVuexStore({isLoading: true, entries: []});
        store.commit('journal/stopLoading');

        expect(store.state.journal.isLoading).toBeFalsy();
    });

    test('Mutation: updateEntry', () => {
        const store = createVuexStore(journalState);
        const updatedEntry = {
                "id": "-MqGFYzIX3OnRFUxP1Zt",
                "date": 1638819574858,
                "text": "Data changed on update"
            };
        store.commit('journal/updateEntry', updatedEntry);

        const storeEntries = store.state.journal.entries;

        expect(storeEntries.length).toBe(2);

        expect(storeEntries.find(
            entry => entry.id === updatedEntry.id
        )).toEqual(updatedEntry);
    });

    test('Mutation: addEntry deleteEntry', () => {
        const store = createVuexStore(journalState);
        const newEntry = {
            "id": "ABC-123",
            "date": 1638819574858,
            "text": "Hola Mundo"
        };

        store.commit('journal/addEntry', newEntry);
        const journal = store.state.journal;
        expect(journal.entries.length).toBe(3);
        expect(journal.entries.find(entry => entry.id === newEntry.id)).toEqual(newEntry);

        store.commit('journal/deleteEntry', newEntry.id);
        expect(journal.entries.length).toBe(2);
        expect(journal.entries.find(entry => entry.id === newEntry.id)).toBeFalsy();


    });


    //Actions

    //Getters
});