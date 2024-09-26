import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
// import storage from 'redux-persist/lib/storage'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import homeReducer from './modules/home'

// 创建reducer(合并拆分的reducer)
const rootReducer = combineReducers({
  home: homeReducer
})

// 持久化配置
const persistConfig = {
  key: 'root',
  storage: session
  // whitelist: [], // 需要持久化保存的模块，默认保存所有模块（语义：白名单）
  // blacklist: [], // 不需要持久化保存的模块，默认不保存任何模块（语义：黑名单）
}

//  创建持久化后的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  //进行模块导入
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

type GetStateFnTYpe = typeof store.getState
type IRootState = ReturnType<GetStateFnTYpe>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const persistor = persistStore(store)
