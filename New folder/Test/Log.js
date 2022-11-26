import React from "react";
import { render } from "react-dom";

// class Log extends React.Component {
  // constructor(props) {
  //   super(props)
  
  // }
  // render() {

  // }
// }

function Login(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function Logout(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

export default {Login, Logout}