import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {}, // conterrà tutto l'utente (che riceviamo dal backend in caso di esito 200 
    error: null,
    success: null
}

export const loggedInUser = createAsyncThunk( //è un metodo di reduce che gestisce le chiamate api
    'user/loggedInUser',
    async ({ email,password}, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3030/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const dataResponse = await response.json()
            return dataResponse
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
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
                state.loading = false
                state.error = null
                state.userLogin = action.payload
                state.success = "login effettuato con successo"
            })
            .addCase(loggedInUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload

            })

    }
})


export const loading = (state) => state.userLoginData.loading
export const error = (state) => state.userLoginData.error
export const userInfo = (state) => state.userLoginData.userInfo
export const success = (state) => state.userLoginData.success
export default loginSlice.reducer