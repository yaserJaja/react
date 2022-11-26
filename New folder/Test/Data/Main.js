import React from "react";

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form className="mt-5 ms-5">
        <label>
          Is going
          <input
            name="isGoing"
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            className='ms-2'
          />
        </label>
        <br />
        <label>
          number of guests:
          <input
            name="numberOfGuests"
            type='number'
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            className='ms-2 ps-1'
          />
        </label>
      </form>
    )
  }
}

export default Main