import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return <div className="bg-slate-500 size-11">我是home页</div>
}

export default memo(Home)
