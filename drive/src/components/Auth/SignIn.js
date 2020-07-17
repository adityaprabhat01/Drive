import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { firebase } from '../../config/firebase'

class SignIn extends Component {

  state = {
    email: '',
    password: '',
    isVerified: false,
    uid: ''
  }

  handleChange = event => {
    console.log(event.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {

        const uid = data.user.uid
        this.setState({
          isVerified: true,
          uid: uid
        })

      })
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

    if (this.state.isVerified) {

      // firebase.auth().onAuthStateChanged(function (user) {
      //   if (user) {
      //     var uid = user.uid;
      //   }
      //   else {
      //   }
      // })

      return (
        <Redirect
          to={{
            pathname: '/drive',
            state: {
              uid: this.state.uid
            }
          }}
        />
      )
    }

    return (
      <div className="jumbotron d-flex align-items-center min-vh-100 bg-white p-0">
        <div className="container">

          <form className="mx-auto p-3 mt-5" style={{ maxWidth: "800", border: "2px solid #1DA1F2", borderRadius: "20px" }} onSubmit={this.handleSubmit}>
            <div className="pb-2">
              <span><h2>Log in to Twitter</h2></span>
            </div>
            <div className="form-group mt-3 form-font">
              <div className="bg-light rounded mt-3">
                <div className="ml-1">
                  <span className="font-weight-light">Username</span>
                </div>
                <div>
                  <input type="text" className="form-control bg-light border-0 pl-1 pr-1 pb-2 pt-1 h-75 outline" onChange={(event) => this.setState({ email: event.target.value })} />
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
            <button className="btn btn-lg btn-primary border-0" style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Log in</button>
          </form>
        </div>
      </div>
    )

  }
}

export default SignIn