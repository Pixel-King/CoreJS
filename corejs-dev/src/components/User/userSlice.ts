import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

interface usersState {
    id: string,
    email: string,
    isAdmin: boolean,
    userName: string,
    token: string,
    rating: string,
}
  
const initialState: usersState = {
    id: '',
    email: '',
    isAdmin: false,
    userName: '',
    rating: '',
    token: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setState: (state, action) => {
            const { email, role, token, id, userName, rating } = action.payload
            state.id = id;
            state.email = email;
            state.isAdmin = role === "admin"? true: false;
            state.userName = userName;
            state.token = token;
            state.rating = rating;
            localStorage.setItem("userID", id);
            localStorage.setItem("token", token);
        }
    }
});

export const { setState } = userSlice.actions

export const selectUserState = (state: RootState) => state.users

export default userSlice.reducer
