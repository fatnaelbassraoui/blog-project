import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoritePost: [],
    totalFavoritePosts: 0,
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        insertInFavorite: (state, action) => {
            state.totalFavoritePosts += 1
            state.favoritePost.push(action.payload)
        },

        resetFromFavorite: (state) => {
            state.totalFavoritePosts = 0
            state.favoritePost = []
        },
    },
})

export const { insertInFavorite } = favoriteSlice.actions
export const { resetFromFavorite } = favoriteSlice.actions
export const favorite = (state) => state.favorits.favoritePost
export const totalFavorite = (state) => state.favorits.totalFavoritePosts
export default favoriteSlice.reducer
