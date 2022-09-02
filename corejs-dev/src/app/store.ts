import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/Autorisation/SignInForm/authSlice';
import usersReducer from '../components/User/userSlice';

export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch