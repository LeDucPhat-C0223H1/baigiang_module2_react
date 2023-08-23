import {useRef} from 'react'

export default function Ref() {
    const inputRef = useRef() 
    const handleFocusClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h2>Focus Input Example</h2>
        <input type="text" ref={inputRef} placeholder='ype something...'/>
        <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  )
}
