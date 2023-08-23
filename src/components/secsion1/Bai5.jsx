import { Component } from 'react';
import './Bai5.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';


const listUser=[
    {
        name: "Daniel Kristeen",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "15 Mar 1998",
    },
    {
        name: "Emma Smith",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "15 Mar 1855",
    },
    {
        name: "Olivia Johnson",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "17 Aug 1988",
    },
    {
        name: "Isabella Williams",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "26 Mar 1999",
    },
    {
        name: "Sophia Jones",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "17 Aug 2001",
    },
    {
        name: "Charlotte Brown",
        age: "Visual Designer Past-Teacher",
        email: "daniel@website.com",
        birthday: "15 Mar 1988",
    },
]

export default class Bai5 extends Component {
  render() {
    return (
      <>
        <AcUnitIcon/>
        <div className='container'>
            <h2 className='title'>Quản lý User</h2>
            <table>
                <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Birthday</th>
                    <th>Name</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    {listUser.map((item,index) => {
                        return (
                        <tr key={(index)}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            <td>{item.birthday}</td>
                            <td>
                                <button className='btn'>Modulator</button>
                            </td>
                            <td>
                                <button className='btn btn_blue'>Edit</button>
                                <button className='btn btn_blue'>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        

        
      </>
    )
  }
}
