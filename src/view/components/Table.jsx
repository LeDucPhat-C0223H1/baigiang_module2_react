import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function TableUserInfor() {
  const [userInfor, setUserInfor] = useState([]);

  useEffect(() => {
    try {
      fetch("https://voucher-hunter-api.onrender.com/api/v1/students")
        .then((res) => res.json())
        .then((data) => setUserInfor(data));
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>YoB</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {userInfor.map((item) => (
          <tr key={item.id}>
            <td>{item.id + 1}</td>
            <td>{item.name}</td>
            <td>{item.yob}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableUserInfor;
