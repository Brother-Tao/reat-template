import { createSlice } from '@reduxjs/toolkit'

// 定义一个 counter 的 slice
const homeStore = createSlice({
  name: 'home', // slice 的进行多环境时候隔离的名称
  initialState: { count: 0 }, // 初始状态
  reducers: {
    // 定义 reducer 方法
    increment: (state) => {
      state.count += 1 // 直接修改 state
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    }
  }
})

// 导出 actions 交给具体组件使用
export const { increment, decrement, reset } = homeStore.actions

// 导出 reducer，供 store index.ts  注册 使用
export default homeStore.reducer
