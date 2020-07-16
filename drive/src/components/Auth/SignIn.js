import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { firebase } from '../../config/firebase'

class SignIn extends Component {

  state = {
    email: '',
    password: '',
    isVerified: false
  }

  handleChange = e => {

  }

  handleSubmit = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.setState({ isVerified: true }))
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  render() {

    if(this.state.isVerified) {
      return (
        <Redirect
          to={{
            pathname: "/drive",
            state: { id: this.state.userId },
          }}
        />
      )
    }

    return (
      <div class="jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
        <div class="container">

          <form class="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.handleSubmit}>
            <div class="pb-2">
              <span><h2>Log in to Twitter</h2></span>
            </div>
            <div class="form-group mt-3 form-font">
              <div class="bg-light rounded mt-3">
                <div class="ml-1">
                  <span class="font-weight-light">Username</span>
                </div>
                <div>
                  <input type="text" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ email: event.target.value })} />
                </div>
                <hr class="mt-0 border-0 boundary" />
              </div>

              <div class="bg-light rounded mt-3">
                <div class="ml-1">
                  <span class="font-weight-light">Password</span>
                </div>
                <div>
                  <input type="password" class="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ password: event.target.value })} />
                </div>
                <hr class="mt-0 border-0 boundary" />
              </div>

            </div>
            <button class="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Log in</button>
          </form>
        </div>
      </div>
    )

  }
}

export default SignIn