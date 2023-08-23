import { Component } from 'react'

export default class PropsChild extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <div>
            {this.props.isOn ?
                <img width={200} src="https://vuongquocden.vn/images/2020/09/19/den-soi-dot.jpg"/>
                :   
                <img width={200} src="https://dictionary.cambridge.org/vi/images/thumb/lightb_noun_002_21219.jpg?version=5.0.332"/>
            }
        </div>
    )
  }
}
