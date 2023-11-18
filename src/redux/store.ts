import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userSlice'
import input from './slices/inputSlice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    user,
    input,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;