import { useMemo, useRef,useState } from 'react'


export default function Memo() {
    const [ name, setName] = useState("");
    const [ price, setPrice ] = useState("");
    const [ products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleAdd = () => {
        setProducts([...products, {
            name: name,
            price: +price
        }])
        setName("")
        setPrice("")
        nameRef.current.focus()
    };
    console.log(products);


    const total = useMemo(() => {
        const result = products.reduce((acc, prod) => {
            return acc + prod.price
        }, 0);
        return result
    }, [products])

  return (
    <>
        <div>
            <input
                type="text"
                ref={nameRef}
                value={name}
                placeholder='Nhập tên'
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                ref={nameRef}
                value={price}
                placeholder='Nhập giá'
                onChange={(e) => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleAdd}>AddProduct</button>
            <p>Total: {total}</p>

            {
                products.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                ))
            }
        </div>
    </>
  )
}
