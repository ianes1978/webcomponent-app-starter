import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { decodeUrl } from '../core/tools';

export const actionNavigate = (location) => (dispatch) => {
    const url = decodeUrl(location);
    dispatch(app.actions.updatePage(url));
};

export const app = createSlice({
    name: 'appRouting',
    initialState: {
        subApp: '',
        page: '',
        parts: '',
        query: '',
    },
    reducers: {
        updatePage: (state, action: PayloadAction<any>) => {
            return {
                subApp: action.payload.subApp,
                page: action.payload.page,
                parts: action.payload.parts,
                query: action.payload.query,
            }
        }
    }
})






