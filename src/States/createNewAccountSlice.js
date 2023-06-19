import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const initialState = {
    newUser: '',
    successResponse: '',
    isLoading: false,
    error: '',
}

export const addNewUserToDB = createAsyncThunk(
    'user/addUser',
    async ({ data }, { rejectWithValue }) => {
        return await axios
            .post(
                'https://faty-blog-server.onrender.com/newUsers', data)
            .then((res) => {
                console.log(res);
                toast.success('User registered successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return res.data
            })
            .catch((error) => {
                if (error) {
                    toast.error(
                        'An error has occurred, please check the data insert',
                        {
                            position: toast.POSITION.TOP_RIGHT,
                        }
                    )
                    rejectWithValue(error)
                }
            })
    }
)

const addNewUsersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewUserToDB.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addNewUserToDB.fulfilled, (state, action) => {
                state.isLoading = false
                state.newUser = action.payload
                state.successResponse = 'user registered successfully'
            })
            .addCase(addNewUserToDB.rejected, (state, action) => {
                state.newUser = action.payload
                state.error = 'an error is occurred'
            })
    }
})

export const registrationSuccess = (state) => state.users.newUser
export const registrationResponse = (state) => state.users.successResponse
export const registrationError = (state) => state.users.error
export default addNewUsersSlice.reducer