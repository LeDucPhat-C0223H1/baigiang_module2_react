
/* <-- HOOKS IN REACT -->
hook => function, đượ gắn vào function component trong React
thay thế cho class component để quản lý được vòng đời của component trong React
bắt đầu bằng chữ use...
muốn sử dụng hooks thì import từ react
thường thì sẽ sử dụng hooks ở đầu function component

#useState 
    tương đương với constructor() bên class component để khai báo state
    const [count,setCount] = useState(initialState)

useEffect 
    (thể hiện side effect bên trong function component, callAPI, setTimeout, cập nhập dữ liệu...) 
    useEffect nhận vào 2 tham số: 1 là callback, 2 là deps
3 cách sử dụng:
_1.useEffect(callback) => Gọi callback mỗi khi component re-render, gọi callback mỗi khi khi thêm component vào DOM
_2.userEffect(callback, []) => chỉ gọi callback 1 lần sau khi componen mounted/ call API
_3.useEffect(callback, [deps]) => callback sẽ được gọi lại mỗi khi dependencias thay đổi
_4.userEffect(return () => {} remove component khỏi DOM

#useRef
    - hook là 1 fuction trả về 1 object với thuộc tính currnet đc khởi tạo qua tham số truyền vào. Object có thể thay đổi và tồn tại xuyên suốt vòng đời của Component
    - lưu giá trị qua 1 tham chiếu bên ngoài fuction component

#useContext và Context()
    - hook là 1 function cung cấp cách chai sẻ dữ liệu (state) tới các component trong cây DOM mà không cần truyền props theo từng cấp bặc
    - useContext là 1 hooks trong react cho phép làm việc vơi sReact Context trong function component

#useReducer
    - 1 hook đucợ sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó
    - useReducer nhận vào reducer function và initState khởi tạo ban đầu, trả về state hiện tại và 1 hàm dispatch dùng để trigger 1 action
    - Flow của redux
        + Action
        + Reduccer
        + Dispatch
        + Store

#useCallback useCallback() => {}, [deps])
    trả về 1 function và useCallback + meno (HOC high order component)
    sử dụng để tối ưu quá trình render của function component
    tránh việc re render liên tục không cần thiết của 1 component

# useMemo(() => {logic}, [deps])
    trả về 1 giá trị
    hooks có tác dụng giúp ránh việc lặp đi lặp lại 1 logic tính toán nặng nề

*/

import { useState } from "react"
export default function UseState() {
    // ví dụ 1:
    // const [count, setCount] = useState (0)
    // return (
    //     <>
    //         <button onClick={() => setCount(count + 1)}>Increase</button>
    //         <p>{count}</p>
    //     </>
    // )

    // ví dụ 2:
    // const [name, setName] = useState ("Conan")
    // const [count, setCount] = useState (18)
    // const [email, setEmail] = useState ("hung@gmail.com")
    const [userInfor, setUserInfor] = useState ({
        name: '',
        age: '',
        email: ''
    })

    const handleInputChange = (e) => {
        // const {name, value} = e.target;
        let name = e.target.name;
        let value = e.target.value;

        setUserInfor(prevUserInfor => ({
            ...prevUserInfor,
            [name]: value
        }))
    }
    return (
        <>
            <h2>Object state example</h2>
            <label>Name:
                <input 
                    type="text"
                    name="name"
                    value={userInfor.name}
                    onChange={handleInputChange}
                />
            </label>
            <br/>
            <label>Age:
                <input 
                    type="number"
                    name="age"
                    value={userInfor.age}
                    onChange={handleInputChange}   
                />
            </label>
            <br/>
            <label>Email:
                <input 
                    type="email"
                    name="email"
                    value={userInfor.email}
                    onChange={handleInputChange}   
                />
            </label>
         
            <h2>Entered Information:</h2>
            <p>Name: {userInfor.name}</p>
            <p>Age: {userInfor.age}</p>
            <p>Email: {userInfor.email}</p>
        </>
    )
  
}
