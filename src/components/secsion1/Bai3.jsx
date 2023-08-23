import { Component } from 'react'

export default class Bai3 extends Component {

constructor(){
    super()
    const d = new Date();
    this.state = {time: d.toLocaleTimeString()};
}

  render() {
    return (
      <>
        <h2>Xin chào các bạn</h2>
        <p>Bây giờ là: {this.state.time}</p>
      </>
    )
  }
}
