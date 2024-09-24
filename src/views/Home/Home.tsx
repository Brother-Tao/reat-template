import { memo } from 'react'
import { useAppSelector, useAppDispatch } from '@/stores'
import { increment, decrement, reset } from '@/stores/modules/home.ts'
import SvgIcon from '@/components/SvgIcon/SvgIcon'

// interface IProps {
//   children?: ReactNode
// }

function Home() {
  const count = useAppSelector((state) => state.home.count)

  // 使用 useDispatch 获取 dispatch 函数 用于传递执行的action
  const dispatch = useAppDispatch()
  return (
    <div className="mx-auto bg-cyan-200 mt-4 w-3/4">
      <SvgIcon name="dragon" size={30} />

      <span className="text-4xl">{count}</span>
      <div className="btns text-center">
        <button
          className="border rounded-md mr-4 border-black"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="border rounded-md mr-4 border-black"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button className="border rounded-md mr-4 border-black" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
    </div>
  )
}

export default memo(Home)
