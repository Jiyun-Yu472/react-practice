import { configureStore } from "@reduxjs/toolkit";
import counterReducer from 'utils/store/slice/counterSlice'
import postsReducer from 'utils/store/slice/postSlice';
import usersReducer from 'utils/store/slice/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
})