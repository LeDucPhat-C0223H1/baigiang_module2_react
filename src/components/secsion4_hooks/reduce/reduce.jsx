/* 

    1 hook đc dử dụng trong trường hợp componet có nhìu state phức tạp 
    và có nhiều action type làm thay đổi state đó.

    useReducer nhận vào 2 para: reducer function và initState khởi tạo ban đầu, 
    trả về state hiện tại và 1 hàm dispatch dùng để trigger 1 action.

    Flow của redux:
    1. ACtion
    2. Reducer
    3. Dispatch
    4. Store  
*/

import { useReducer } from "react";

const initState = 0;
const UP_ACTION = "UP";
const DOWN_ACTION = "DOWN";
const reducer = (state, action) => {
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        default:
            return state;
    }
};

export default function Reducer() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(UP_ACTION)}>Increase</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Decrease</button>
        </div>

);
}