import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    userInfo: null, // conterrà tutto l'utente (che riceviamo dal backend in caso di esito 200
    error: null,
    success: null
}

export const loggedInUser = createAsyncThunk( //è un metodo di reduce che gestisce le chiamate api
    'user/loggedInUser',
    async (data, { rejectWithValue }) => {
        return await axios
            .post(`http://localhost:3030/login`, data)
            .then((resp) => {
                return resp.data
            })
            .catch((error) => {
                return rejectWithValue(error)
            })
    }
)



const loginSlice = createSlice({
    name: 'userLogin',
    initialState,

    extraReducers: (builder) => { // extraReducers si usa quando si fa un achiamata esterna ovvero chiamata api
        builder
            .addCase(loggedInUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loggedInUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false
                state.error = null
                state.userInfo = action.payload
                state.success = action.payload.message
            })
            .addCase(loggedInUser.rejected, (state, action) => {
                console.log(action.payload)
                state.loading = false
                state.error = action.payload.message
            })

    }
})


export const loading = (state) => state.userLoginData.loading
export const error = (state) => state.userLoginData.error
export const userInfo = (state) => state.userLoginData.userInfo
export const success = (state) => state.userLoginData.success
export default loginSlice.reducer
