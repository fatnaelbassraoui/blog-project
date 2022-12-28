import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

    userInfo: {},
    loading: false,
    error: null,
    success: null

}


export const createAccount = createAsyncThunk(
    'user/createUser',
    async (data) => {
        return await axios

            .post(`${process.env.REACT_APP_SERVER_BASE_URL}/registeredUsers`, data)
            .then((res) => {
                return res
            })
            .catch((error) => {
                return error
            })

    }

)
