import React from "react"
function Children(props) {
  console.log('子组件render')

  return <div>{ JSON.stringify(props) }</div>
}

export default React.memo(Children)
