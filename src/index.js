import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {combineReducers,configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import postReducer from './States/postSlice'
import featuredPostReducer from './States/postFeaturedSlice'
import  favorite  from './States/favoriteSlice'
import loginSliceReducer from './States/userInfoSlice'




const reducer = combineReducers({
        posts:postReducer,
        postsFeatured: featuredPostReducer,
        favorits:favorite,
        userLoginData:loginSliceReducer
})
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
)
