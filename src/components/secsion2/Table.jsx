// import React from 'react'

export default function Table({productList}) {
    console.log(productList)
    return (
        <>
            <h1 className="text-center">This ia a table</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">NAME</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">IMAGES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.stock}</td>
                            <td>{item.price}</td>
                            <td><img width={150} src={item.url}/></td>
                        </tr>
                        )
                        )}
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}
