import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { counterSlice } from './store-counter'

const reducer = combineReducers({
    counter: counterSlice.reducer
})

const store = configureStore({ reducer })

export { store }