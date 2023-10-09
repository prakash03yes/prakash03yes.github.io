import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeReducer';
import appReducer from './reducers/appReducer';


export const store = configureStore({
    reducer: {
        homeReducer,
        appReducer,
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
