import { RouteObject } from 'react-router-dom'
import { Home, Login } from './element.ts'

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

export default routers
