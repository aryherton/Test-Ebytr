import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    nameUser: '',
    arrMessages:[],
  },
  reducers: {
    setNameUser: (state, action) => {
      state.nameUser = action.payload;
    },
    setArrMessages: (state, action) => {
      state.arrMessages = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNameUser, setArrMessages } = userInfoSlice.actions;

export default userInfoSlice.reducer