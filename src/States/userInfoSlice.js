import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    userInfo: {}, // conterrà i dati dell'utente (che riceviamo dal backend in caso di esito 200)
    loading: false,
    error: null,
    success: null,
}

export const loggedInUser = createAsyncThunk(
    //è un metodo di reduce che gestisce le chiamate api
    'user/loggedInUser',
    async (data, { rejectWithValue }) => {
        return await axios
            .post(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, data)
            .then((resp) => {
                if (resp.status === 200) {
                    localStorage.setItem('userData', JSON.stringify(resp.data))
                }
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
    extraReducers: (builder) => {
        // extraReducers si usa quando si fa una chiamata esterna ovvero chiamata api
        builder
            .addCase(loggedInUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loggedInUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.userInfo = action.payload
                state.success = action.payload.message
            })
            .addCase(loggedInUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const loading = (state) => state.userLoginData.loading
export const error = (state) => state.userLoginData.error
export const userInfo = (state) => state.userLoginData.userInfo
export const success = (state) => state.userLoginData.success
export default loginSlice.reducer
