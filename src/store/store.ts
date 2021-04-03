import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'
import { decodeUrl } from '../core/tools';
import { app } from './store-app'
import { counterSlice } from './store-counter'

const { actions: authActions, reducer: authReducer } = createSlice({
    name: 'isAuthenticated',
    initialState: false,
    reducers: {
        signIn: () => true,
        signOut: () => false
    }
})

const { signIn, signOut } = authActions

const reducer = combineReducers({
    app: app.reducer,
    counter: counterSlice.reducer
    // user: authReducer,
})

const store = configureStore({ reducer })

export { store }