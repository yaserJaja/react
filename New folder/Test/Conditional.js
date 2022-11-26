import React from "react";
import { render } from "react-dom";
import Log from "./Log";

class LogConi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false}
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn){
      button = <Logout onClick= {this.handleLogoutClick} />
    } else {
      button = <Login onClick= {this.handleLoginClick} />
    }
    return (
      <div>
        <LogConi isLoggedIn = {isLoggedIn}/>
        {button}
      </div>
    )
  }
}

export default LogConi