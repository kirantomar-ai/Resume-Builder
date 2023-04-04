import { configureStore } from '@reduxjs/toolkit'
import dataStoreReducer from './dataStoreSlice'

export default configureStore({
  reducer: {
    dataStore: dataStoreReducer
  }
})