import {useEffect, useState} from 'react'

export default function Effect() {
    const [ count, setCount] = useState(0)
    useEffect(() => {
        console.log("Effec ran!")
        document.title = `Count: ${count}`
    })
  return (
    <div>
        <h2>UseEffec Hook</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incerament count</button>
    </div>
  )
}
