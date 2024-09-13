import { routers } from '@/routers'

function App() {
  const element = useRoutes(routers)
  return <div className="App">{element}</div>
}

export default App
