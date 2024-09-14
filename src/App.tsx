import { useState } from "react"
import Children from "./Children"

const p = ()=>{}

function App() {
  const [counter, setCounter] = useState(0)
  const [b] = useState({})

  // console.log('父组件执行')

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        点击修改 counter：{counter}
      </button>
      <Children a={1} b={b} c={p} />
      {/* <Children /> */}
    </div>
  )
}

export default App
