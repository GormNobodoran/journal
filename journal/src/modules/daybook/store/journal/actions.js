import journalApi from '@/api/journalApi';

export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/entries.json');
    if(!data){
        commit('setEntries', []);
        return;
    }
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
    const {date, picture, text} = {...dataToUpdate}
    const dataToSave = {date, picture, text};

    await journalApi.put(`/entries/${dataToUpdate.id}.json`, dataToSave);

    dataToSave.id = dataToUpdate.id;

    commit('updateEntry', {...dataToSave});
}

export const createEntry = async ({commit}, newEntry) => {
    const {data} = await journalApi.post('/entries.json', newEntry);
    newEntry.id = data.name;

    commit('addEntry', newEntry);
    return data.name;
}

export const deleteEntry = async ({commit}, id) => {
    await journalApi.delete(`/entries/${id}.json`);
    commit('deleteEntry', id);
}

