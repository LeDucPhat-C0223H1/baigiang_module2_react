import { Component } from 'react'
import PropsChild from './PropsChild'

// export default class PropsFather extends Component {
//     constructor(){
//         super();
//         this.state = {name: 'Minh'}
//     }

//   render() {
//     return (
//       <div>
//             <p>{this.state.name}</p>
//             <PropsChild name={this.state.name}/>
//       </div>
      
//     )
//   }
// }


export default class PropsFather extends Component {
    constructor(){
        super();
        this.state = {isOn : false};
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({isOn : !this.state.isOn})
    }

  render() {
    return (
      <div>
            <PropsChild isOn = {this.state.isOn}/>
            <br/>
            <button onClick={()=> this.handleClick()}>Công tắc</button>
      </div>
    )
  }
}

