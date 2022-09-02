import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

interface usersState {
    id: string,
    email: string,
    isAdmin: boolean,
    userName: string,
    token: string,
}
  
const initialState: usersState = {
    id: '',
    email: '',
    isAdmin: false,
    userName: '',
    token: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setState: (state, action) => {
            const { email, role, token, id, userName } = action.payload
            state.id = id;
            state.email = email;
            state.isAdmin = role === "admin"? true: false;
            state.userName = userName;
            state.token = token;
            localStorage.setItem("userID", id);
            localStorage.setItem("token", token);
        }
    }
});

export const { setState } = userSlice.actions

export const selectUserState = (state: RootState) => state.users

export default userSlice.reducer
