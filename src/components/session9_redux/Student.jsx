import React from 'react'
import "./redux/student/Student.css"
import { useSelector } from 'react-redux'

export default function Student() {
    const listStudent = useSelector((state) => state.student)

  return (
    <div>
        <h2 className='text-center mt-5'>Danh sách sinh viên</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ Tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Lớp</th>
                </tr>
            </thead>
            <tbody>
                {(listStudent).map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.class}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
