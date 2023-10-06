import { RootState, AppDispatch } from "./index";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();