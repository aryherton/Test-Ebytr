import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './slices/selections';

export default configureStore({
  reducer: {
    userInfo: userInfoSlice,
  }
})