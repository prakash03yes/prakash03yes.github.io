import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Props = {
    isStarsAnimating: boolean,
    skillsShape: "spherical" | "table"
}

const initialState: Props = {
    isStarsAnimating: false,
    skillsShape: "table",
}

export const homeReducer = createSlice({
    name: 'homeReducer',
    initialState,
    reducers: {
        setIsStarsAnimating: (state, action: PayloadAction<boolean>) => {
            state.isStarsAnimating = action.payload;
        },
        setSkillsShape: (state, action: PayloadAction<"spherical" | "table">) => {
            state.skillsShape = action.payload;
        },
        resethomeReducer: () => {
            return initialState;
        }
    },
});

export const {
    setIsStarsAnimating,
    setSkillsShape,
    resethomeReducer,
} = homeReducer.actions;


export default homeReducer.reducer;