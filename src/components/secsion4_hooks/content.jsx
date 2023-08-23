import {memo} from 'react'

function Content({onIncrease}) {
    console.log("content được gọi")
  return (
    <div>
        <h2>Hello Cac Ban</h2>
        <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}
export default memo(Content)