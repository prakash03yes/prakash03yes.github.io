import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/homeReducer';


export const store = configureStore({
    reducer: {
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [],
            ignoredPaths: []
        }
    })
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
