import React from "react";
import index from './index';

// function Clock(props) {
//   return (
//     <div>
//         <h1>Hello, World!</h1>
//         <h2>Clock is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//           <h1>Hello, World!</h1>
//           <h2>Clock is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      _ => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
          <h1>Hello, World!</h1>
          <h2>Clock is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default Clock