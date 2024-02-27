import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: [],
    },
    reducers: {
        cacheResults: (state, action) => {
            const payload = action.payload;
            if (!state.results.includes(payload)) {
                state.results.push(payload);
            }
        }
    }
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;