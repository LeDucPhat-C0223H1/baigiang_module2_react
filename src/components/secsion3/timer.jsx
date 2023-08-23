import { Component } from 'react'

export default class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            intervalId : null
        };

    }

    componentDidMount() {
        // Start a timer that updates the state every second
        this.state.intervalId = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1,}))
        }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount được gọi");
        clearInterval(this.state.intervalId);
    }
    
  render() {
    return (
      <div>
        <h2>Timer: {this.state.timer} seconds</h2>
      </div>
    )
  }
}
