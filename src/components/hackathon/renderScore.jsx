import React, { Component } from 'react'

// let users = []
export default class RenderScore extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://voucher-hunter-api.onrender.com/api/v1/students")
          .then((res) => res.json())
          .then((res) => this.setState({ users: res }));
      }
      

  render() {
    console.log(this.state.users)
    return (
        
      <>
            <h1 className="text-center">This ia a table</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">NAME</th>
                            <th scope="col">SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item,index) => (
                        <tr key={index}>
                            <td>{item.id + 1 }</td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                        </tr>
                        )
                        )}
                        
                    </tbody>
                </table>
            </div>
      </>
    )
  }
}



  
    
  
  
    
