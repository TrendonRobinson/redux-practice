import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businesses: [],
    categories: [],
    initialCategories: [],
    displayedBusinesses: [],
};

export const resultsSlice = createSlice({
    name: "results",
    initialState: {
        value: initialState,
    },
    reducers: {
        setBusinesses: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };
        },

        setInitialCategories: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };
        },
        setCategories: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };
        },

        setDisplayedBusinesses: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
            };
        },

        reset: (state, action) => {
            state.value = initialState;
        },
    },
});

export const {
    setBusinesses,
    setInitialCategories,
    setCategories,
    setDisplayedBusinesses,
    reset,
} = resultsSlice.actions;

export default resultsSlice.reducer;
