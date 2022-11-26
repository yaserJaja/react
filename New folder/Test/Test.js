import React, {Component} from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: 'Yaser'}
    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle () {
    let name = document.getElementById('name');
    let msg = document.getElementById('msg');
    if (name.value != '') {
      this.setState({name: name.value})
    } else {
      msg.innerHTML = 'Please Enter Your Name'
    }
  }

  render() {
    return (
      <div>
        <input type='text' id='name' />
        <h1 id ='msg'>{this.state.name}</h1>
        <button onClick={this.clickHandle} >Click Me!</button>
      </div>
    )
  }
}

export default Test