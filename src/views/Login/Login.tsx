import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return <div>我是Login页</div>
}

export default memo(Login)
