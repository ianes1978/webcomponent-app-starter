import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        addOne: (state) => ++state,
        subOne: (state) => --state
    }
})

export const { addOne, subOne } = counterSlice.actions




