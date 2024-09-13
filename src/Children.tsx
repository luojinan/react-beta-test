function Children(props) {
  console.log('子组件执行')

  return (
    <div>
      {props.a} {props.b}
    </div>
  )
}

export default Children
