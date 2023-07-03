import React, { Component } from 'react'

export class FormHadling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:"",
       lastName:"",
       email:"",
       phone:"",
       message:""
    }
  }

  handleFirstName = event =>{
     this.setState({
      firstName:event.target.value
     })
  }

  handleLastName = event =>{
    this.setState({
     lastName:event.target.value
    })
 }

 handleEmail = event =>{
  this.setState({
   email:event.target.value
  })
}

handlePhone = event =>{
  this.setState({
   phone:event.target.value
  })
}

handleMessage = event =>{
  this.setState({
   message:event.target.value
  })
}
onSubmission = form =>{
  alert(` ${this.state.firstName}
          ${this.state.lastName} 
          ${this.state.email} 
          ${this.state.phone} 
          ${this.state.message}`)
  form.preventDefault()
}

  render() {
    return (
      <div>
      <h2>Hello, from Form Hadling</h2>
          <form onSubmit={this.onSubmission}>
            <input placeholder='First Name' value={this.state.firstName} onChange={this.handleFirstName}/><br/>
            <input placeholder='Last Name' value={this.state.lastName} onChange={this.handleLastName}/><br/>
            <input placeholder='Email ' value={this.state.email} onChange={this.handleEmail}/><br/>
            <input placeholder='Phone' value={this.state.phone} onChange={this.handlePhone}/><br/>
            <textarea placeholder='Your Message Here...' value={this.state.message} onChange={this.handleMessage}></textarea><br/>
            <button type='submit'>Send</button><br/>
          </form>
      </div>
    )
  }
}

export default FormHadling

