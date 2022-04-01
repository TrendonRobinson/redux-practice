import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: {
            zipcode: 0,
            radius: 40000,
            limit: 20,
        },
    },
    reducers: {
        setZipcode: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };

            // state.value = action.payload;
        },
        setRadius: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };
        },
    },
});

export const { setRadius, setZipcode } = searchSlice.actions;

export default searchSlice.reducer;
