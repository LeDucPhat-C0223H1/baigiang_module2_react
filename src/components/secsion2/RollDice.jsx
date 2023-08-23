import { Component } from 'react'
import Dice from './Dice'


export default class RollDice extends Component {
    // Face numbes passes as default props
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"],
    };

    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: "two",
            rolling: false,
        }
    }

    roll() {
        const {sides} = this.props;
        this.setState({
            dice1: sides[Math.floor(Math.random() * sides.length)],
            dice2: sides[Math.floor(Math.random() * sides.length)],
            rolling:true
        })
        setTimeout( () => {
            this.setState({rolling: false})
        }, 1000)
    }

  render() {
    const {dice1, dice2, rolling} = this.state;
    return (
      <div>
            <h1>This is RollDice</h1>
            <div style={{display:'flex'}}>
                <Dice face={dice1} rolling={rolling}/>
                <Dice face={dice2} rolling={rolling}/>
            </div>
            <button onClick={() => this.roll()}>
                {rolling ? "RollDice" : "Rolling"}
            </button>
      </div>
    )
  }
}
