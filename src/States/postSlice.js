import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    post: [],
    error: null,
    isLoading: true,
    totalPosts: 0,
}

export const getPostsRedux = createAsyncThunk('post/getPosts', async () => {
    try {
        const data = await fetch(
            `${process.env.REACT_APP_SERVER_BASE_URL}/post/type?featured=false`
        )
        return await data.json()
    } catch (error) {
        if (error) throw error
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPostsRedux.pending, (state) => {
                state.isLoading = true
                state.error = null
                state.totalPosts = 0
            })
            .addCase(getPostsRedux.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.totalPosts = action.payload.length
                state.post = action.payload
            })
            .addCase(getPostsRedux.rejected, (state) => {
                state.isLoading = false
                state.error = 'impossibile ricevere i dati'
                state.totalPosts = 0
            })
    },
})

export const totalPost = (state) => state.posts.totalPosts
export const error = (state) => state.posts.error
export const post = (state) => state.posts.post
export const loading = (state) => state.posts.isLoading
export default postSlice.reducer
