import React, { Component } from 'react'

import { firebase } from '../../config/firebase'

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = e => {

  }

  handleSubmit = e => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  render() {

    return (
      <div className="jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
        <div className="container">

          <form className="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.handleSubmit}>
            <div className="pb-2">
              <span><h2>Create your account</h2></span>
            </div>
            <div className="form-group mt-3 form-font">
              <div className="bg-light rounded mt-3">
                <div className="ml-1">
                  <span className="font-weight-light">Name</span>
                </div>
                <div>
                  <input type="text" className="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ name: event.target.value })} />
                </div>
                <hr className="mt-0 border-0 boundary" />
              </div>

              <div className="bg-light rounded mt-3">
                <div className="ml-1">
                  <span className="font-weight-light">Email</span>
                </div>
                <div>
                  <input type="text" className="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ email: event.target.value })} />
                </div>
                <hr className="mt-0 border-0 boundary" />
              </div>

              <div className="bg-light rounded mt-3">
                <div className="ml-1">
                  <span className="font-weight-light">Username</span>
                </div>
                <div>
                  <input type="text" className="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ username: event.target.value })} />
                </div>
                <hr className="mt-0 border-0 boundary" />
              </div>

              <div className="bg-light rounded mt-3">
                <div className="ml-1">
                  <span className="font-weight-light">Password</span>
                </div>
                <div>
                  <input type="password" className="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ password: event.target.value })} />
                </div>
                <hr className="mt-0 border-0 boundary" />
              </div>

            </div>
            <button className="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp