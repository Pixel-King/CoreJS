import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/Autorisation/SignInForm/authSlice';
import usersReducer from '../components/User/userSlice';
import soundReducer from '../components/Sound/ToggleSoundSlice';
import testReducer from '../components/Tests/testSlice'
export const store = configureStore({
    reducer: {
        userAuth: authReducer,
        users: usersReducer,
        test: testReducer,
        userSound: soundReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch