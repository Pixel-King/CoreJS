import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

interface usersState {
    id: string,
    email: string,
    isAdmin: boolean,
    userName: string,
    rating: "jun" | "mid" | "sen",
    token: string,
    // rating: string,
    sound: boolean,
}
  
const initialState: usersState = {
    id: '',
    email: '',
    isAdmin: false,
    userName: '',
    rating: 'jun',
    token: '',
    sound: true,
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
            state.rating = +rating < 50 ? 'jun' : +rating < 150 ? 'mid' : 'sen';
            if (token) {
                localStorage.setItem("userID", id);
                localStorage.setItem("token", token);
            }
        },
        setEmailAndUsername: (state, action) => {
            const { email, userName } = action.payload
            if (email && userName) {
                state.email = email;
                state.userName = userName;
            }
        }
        },
    }
);

export const { setState, setEmailAndUsername } = userSlice.actions

export const selectUserState = (state: RootState) => state.users

export default userSlice.reducer
