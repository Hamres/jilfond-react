import {createAsyncThunk, createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import {SearchType, userSliceState, UserType} from "../types/types";

export const fetchUser = createAsyncThunk<UserType[], SearchType>('user/fetchUserStatus', async ({search}) => {
  const arr = search.split(/[, .;:+-]/)

  let mark = '?'

  arr.map((el) =>
    Number(el)
      ? (mark += `id=${el}&`) : el !== ''
      ? (mark += `username=${el.charAt(0).toUpperCase() + el.slice(1)}&`) : null
  )

  const {data} = await axios.get<UserType[]>(`https://jsonplaceholder.typicode.com/users${mark}`)
    return data
  }
)

const initialState: userSliceState = {
  status: 'wait',
  users: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UserType[]>) {
      state.users = action.payload
    }
  },
  extraReducers: builder =>  {
    builder
      .addCase(fetchUser.pending, state => {
        state.status = 'loading'
        state.users = []
    })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload
        state.status = 'success'
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'error'
        state.users = []
      })
  }
})

export const test = (id: number) =>
  createSelector(
    (store: RootState): UserType[] => store.user.users,
    (data): UserType | undefined => data.find((elem) => elem.id === id)
  )

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer