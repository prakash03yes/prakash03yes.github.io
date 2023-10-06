import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Props = {
    isStarsAnimating: boolean,
}

const initialState: Props = {
    isStarsAnimating: false
}

export const homeReducer = createSlice({
    name: 'homeReducer',
    initialState,
    reducers: {
        setIsStarsAnimating: (state, action: PayloadAction<boolean>) => {
            state.isStarsAnimating = action.payload;
        },
        resethomeReducer: () => {
            return initialState;
        }
    },
});

export const {
    resethomeReducer,

} = homeReducer.actions;


export default homeReducer.reducer;