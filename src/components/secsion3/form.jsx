import React, { Component } from "react";
import Login from "./login";
import Register from "./register";

// Có 2 loại form trong React
// 1 là controlled form => giá trị thành phần form được lưu trong state của component
//    giá tri trị được cập nhật thông qua séttate
// Dữ liệu trong form được quản lý hoàn thành bơi component

// 2 là uncontrolled form
// Dữ liệu trong form đucợ quản lý bioiwr DOM
// Sử dụng ref để lấy dữ liệu từ DOM (userRef)

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            // isLogin: true,
            studentName: "",
            age: "",
            course: "",
        };
    }

    // handleSwitchPage = () => {
    //     this.setState({
    //         isLogin: !this.state.isLogin,
    //     });
    // }

    handleSubmit = (e) => {
        alert(
            `Xin chào: ${this.state.studentName}. Bạn đã đăng ký khóa học: ${this.state.course}. Năm nay bạn chưa đủ tuổi `
        );
        e.preventDefault(); //ngăn chặn hành vi mặc định của browser
    };

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // cập nhật state
        this.setState({
            [name]: value,
        });
    };
    render() {
        return (
            <>
                {/* {this.state.isLogin ? (
            <Login handleSwitchPage={this.handleSwitchPage}/> 
        ) : (
            <Register handleSwitchPage={this.handleSwitchPage}/>
        )} */}



                <form onSubmit={this.handleSubmit}>
                    <label>Tên học viên:</label>
                    <input
                        type="text"
                        name="studentName"
                        value={this.state.studentName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Tuổi:</label>
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        Chọn khóa học:
                        <select
                            value={this.state.course}
                            name="course"
                            onChange={this.handleChange}
                        >
                            <option value="ReactJS">ReactJS</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="NodeJS">NodeJs</option>
                        </select>
                    </label>

                    <input type="submit" value="submit" />
                </form>
            </>
        );
    }
}
