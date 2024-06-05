import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const hiddenArticlesSlice = createSlice({
    name: 'hiddenArticles',
    initialState,
    reducers: {
        hideArticle: (state, action) => {
            state.value.push(action.payload);
        },
        displayArticle: (state, action) => {
            state.value = []
        }

    },
});

export const { hideArticle, displayArticle } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;