import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import homeReducer from './modules/home'

const store = configureStore({
  //进行模块导入
  reducer: {
    // 你的 reducers
    home: homeReducer
  }
})

type GetStateFnTYpe = typeof store.getState
type IRootState = ReturnType<GetStateFnTYpe>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
