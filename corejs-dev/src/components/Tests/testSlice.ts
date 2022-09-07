import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

interface usersState {
    testId: string,
}
  
const initialState: usersState = {
    testId: '',
}

export const testSlice = createSlice({
    name: 'testId',
    initialState,
    reducers: {
        setTestId: (state, action) =>{
            state.testId = action.payload;
        }
        },
    }
);

export const { setTestId } = testSlice.actions

export const selectTestState = (state: RootState) => state.test

export default testSlice.reducer