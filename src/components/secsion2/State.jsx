// import { Component } from 'react'

// export default class State extends Component {
//   constructor(){
//       super();
//       this.state = {value : 0};
//       this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick () {
//       // this.setState({value : this.state.value + 1});
//       this.setState({value : Math.floor(Math.random(this.state.value) *100)})
//   }

//   render() {
//     return (
//       <div>
//         <p>Số lần đếm là <b>{this.state.value}</b></p>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     )
//   }
// }

import { Component } from 'react'

export default class State extends Component {
  constructor(){
    super();
    this.state = {name : 'Phát'};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({name : event.target.value})
  }

  handleClick() {
    alert('Xin chào ' + this.state.name);
   
  }

  render() {
    return (
      <div>
         <p>Nhập tên bạn <br/> <input type="text" value={this.state.name} onChange={this.handleChange} /></p>
         <button onClick={this.handleClick} >Xuất câu chào</button>
      </div>
    )
  }
}



