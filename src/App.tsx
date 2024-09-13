import { useState } from "react"
import Children from "./Children"

function App() {
  const [counter, setCounter] = useState(0)

  function p() {
    console.log('函数执行 ')
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        点击修改 counter：{counter}
      </button>
      <Children a={1} b={2} c={p} />
    </div>
  )
}

export default App
