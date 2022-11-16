import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    postFeatured:[],
    error:null,
    isLoading:true,
    totalPosts:0
}

export const  getFeaturedPostsRedux = createAsyncThunk('post/getFeaturedPosts', async ()=>{
    try {
        const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/post/type?featured=true`)
        return await data.json()
        
    } catch (error) {
        if(error) throw error
        
    }
})

const postFeaturedSlice = createSlice({
    name:'postsFeatured',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getFeaturedPostsRedux.pending,(state)=>{
            state.isLoading = true
            state.error = null
            state.totalPosts = 0
        })
        .addCase(getFeaturedPostsRedux.fulfilled, (state,action)=>{
            state.isLoading = false
            state.error = null
            state.totalPosts = action.payload.length
            state.postFeatured = action.payload
        })
        .addCase(getFeaturedPostsRedux.rejected, (state)=>{
            state.isLoading= false
            state.error = 'impossibile ricevere i dati'
            state.totalPosts= 0
        })

    }
})



export const totalPost = (state)=> state.postsFeatured.totalPosts
export const error = (state)=> state.postsFeatured.error
export const featuredPost= (state)=> state.postsFeatured.postFeatured 
export const loading = (state) => state.postsFeatured.isLoading 
export default postFeaturedSlice.reducer