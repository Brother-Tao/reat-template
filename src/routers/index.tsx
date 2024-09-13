import { RouteObject } from 'react-router-dom'
import Home from '@/views/Home/Home'
import Login from '@/views/Login/Login'

/**
 * 公共路由
 */
export const routers: RouteObject[] = [
  {
    path: '/',
    id: 'Home',
    element: <Home />
  },
  {
    path: '/login',
    id: 'Login',
    element: <Login />
  }
]

// 创建一个可以被 React 应用程序使用的路由实例

export default routers
