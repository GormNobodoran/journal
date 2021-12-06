import journalApi from '@/api/journalApi';

export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/entries.json');
    const entries = [];
    for(let id of Object.keys(data)) {
        entries.push({
           id,
           ...data[id],
        });
    }
    commit('setEntries', entries);
    commit('stopLoading');
}

export const updateEntry = async ({commit}, dataToUpdate) => {
    const id = dataToUpdate.id;
    delete(dataToUpdate.id);
    const {data} = await journalApi.put(`/entries/${id}.json`, dataToUpdate);

    commit('updateEntry',  {id, ...data});
}

export const createEntry = async ({commit}, newEntry) => {
    const {data} = await journalApi.post('/entries.json', newEntry);
    newEntry.id = data.name;

    commit('addEntry', newEntry);
    return data.name;
}

export const deleteEntry = async (/*{commit}*/) => {

}

