import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store';

interface authState {
    auth: boolean,
}
  
const initialState: authState = {
    auth: false
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        initAuth: (state): void => {
            state.auth = true;
        },
        removeAuth: (state): void => {
            state.auth = false;
        }
    }
});

export const { initAuth, removeAuth } = authSlice.actions

export const selectAuth = (state: RootState) => state.userAuth.auth

export default authSlice.reducer