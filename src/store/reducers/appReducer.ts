import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Props = {
    screenWidth: number,
    screenHeight: number
}

const initialState: Props = {
    screenWidth: 0,
    screenHeight: 0,
}

export const appReducer = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        setScreenWidth: (state, action: PayloadAction<number>) => {
            state.screenWidth = action.payload;
        },
        setScreenHeight: (state, action: PayloadAction<number>) => {
            state.screenHeight = action.payload;
        },
        setScreenSize: (state, action: PayloadAction<{ screenWidth: number, screenHeight: number }>) => {
            state.screenWidth = action.payload.screenWidth;
            state.screenHeight = action.payload.screenHeight;
        },
        resetAppReducer: () => {
            return initialState;
        }
    },
});

export const {
    setScreenWidth,
    setScreenHeight,
    setScreenSize,
    resetAppReducer
} = appReducer.actions;


export default appReducer.reducer;