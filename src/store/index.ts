import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeReducer';


export const store = configureStore({
    reducer: {
        homeReducer,
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
