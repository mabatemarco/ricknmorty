import React, { Component } from 'react'

export default class CreateCharacter extends Component {
  state = {
    newCharacter: {
      name: '',
      image: '',
      status: ''
    }
  }

  //This is an example of a default handlechange function, and the way that state would be set up to receive it.  For this to work, each input needs to have the name property equal to that variable in state that it corresponds to. 

  // state = {
  //   name: '',
  //   image: '',
  //   status: ''
  // }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      newCharacter: {
        ...prevState.newCharacter,
        [name]: value
      }
    }))
  }


  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.props.addNewCharacter(e,this.state.newCharacter)}}>
          <input name="name" placeholder="name" type="text" onChange={this.handleChange} />
          <input name="image" placeholder="image link" type="text" onChange={this.handleChange} />
          <input name="status" placeholder="status" type="text" onChange={this.handleChange} />

          <button>Register</button>

        </form>
      </div>
    )
  }
}
