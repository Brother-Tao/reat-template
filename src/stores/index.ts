import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'

const store = configureStore({
  //进行模块导入
  reducer: {
    // 你的 reducers
    home: homeReducer
  }
})

export default store
