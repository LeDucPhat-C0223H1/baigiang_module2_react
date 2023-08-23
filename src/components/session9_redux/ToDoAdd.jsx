import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob, deleteJob } from "./redux/todo/action";

export default function ToDoAdd() {
    const [inputText, setInputText] = useState("");
    const inputRef = useRef();

    const dispatch = useDispatch();
    const listJobs = useSelector((state) => state.todo.listJobs);

    const handleAddJob = () => {
        if (inputText.trim() !== "") {
            dispatch(addJob(inputText));
            setInputText("");
        }
        else{
            inputRef.current.focus();
        }
    };

    const handleDeleteJob = (index) => {
        dispatch(deleteJob(index));
    };

    return (
        <>
            <div style={{ padding: "0 50px" }}>
                <h1>To Do App</h1>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter a new job"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button onClick={handleAddJob}>Add</button>
            </div>

            <ul style={{ padding: "10px 70px" }}>
                {listJobs.map((item,index) => (
                    <li key={index}>
                        <div style={{ width:'200px', display:'flex', justifyContent:'space-between'}}>
                            {item} 
                            <button onClick={() => handleDeleteJob(index) }>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
