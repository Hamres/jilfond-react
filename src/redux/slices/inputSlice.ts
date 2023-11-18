import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {InputSliceState} from "../types/types";

const initialState: InputSliceState = {
  updateValue: ''
}

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setUpdateValue(state, action: PayloadAction<string>) {
      state.updateValue = action.payload
    }
  },
})
export const selectInput = (state: RootState) => state.input

export const {setUpdateValue} = inputSlice.actions

export default inputSlice.reducer