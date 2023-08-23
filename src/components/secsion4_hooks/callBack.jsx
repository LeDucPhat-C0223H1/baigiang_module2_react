import {useCallback, useState} from 'react'
import Content from './content'

// Reference Type: useCallback so sánh dauwj trên toán tử ===
// useCallback mỗi lần tạo hàm mới, callback nó sẽ lưu hàm này vào bộ nhớ và trả về tham chiếu mới dựa trên deps
// nếu [] ko có deps, callback luôn trả về tham chiếu cũ, dẫn đến khoogn dến re-render lại compoment
// Primitive Type

export default function CallBack() {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])
  return (
    <>
        <div style={{padding: "10px 32px"}}>
            <Content onIncrease={handleIncrease}/>
            <p>{count}</p>
        </div>
    </>
  )
}
