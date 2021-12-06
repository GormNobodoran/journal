export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries];
}

export const stopLoading = (state) => {
    state.isLoading = false;
}

export const updateEntry = (state, data) => {
    const indexToUpdate = state.entries.findIndex(entry => entry.id === data.id);
    state.entries[indexToUpdate] = data;
}

export const addEntry = (state, newEntry) => {
    state.entries.unshift(newEntry);
}

export const deleteEntry = (/*state*/) => {

}
