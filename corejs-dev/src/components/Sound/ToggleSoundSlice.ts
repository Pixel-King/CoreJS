import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

interface soundState {
    sound: boolean,
}
  
const initialState: soundState = {
    sound: true
}

export const soundSlice = createSlice({
    name: 'userSound',
    initialState,
    reducers: {
        initSound: (state): void => {
            state.sound = true;
        },
        removeSound: (state): void => {
            state.sound = false;
        }
    }
});

export const { initSound, removeSound } = soundSlice.actions

export const selectSound = (state: RootState) => state.userSound.sound

export default soundSlice.reducer