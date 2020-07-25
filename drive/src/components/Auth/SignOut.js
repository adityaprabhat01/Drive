import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { firebase } from '../../config/firebase'

class SignOut extends Component {

  state = {
    signedOut: false
  }

  handleClick = () => {
    console.log('hello')
    firebase.auth().signOut().then(data => {
      this.setState({ signedOut: true })
      console.log('sign out success', firebase.auth().isSignInWithEmailLink(window.location.href))
    }).catch(function(error) {
      console.log('error sign out')
    });
  }

  render() {

    if(this.state.signedOut) {
      return (
        <Redirect
          to={{
            pathname: '/signin',
          }}
        />
      )
    }

    return (
      <button className="btn btn-lg btn-primary border-0" onClick={this.handleClick} style={{ backgroundColor: "#1DA1F2", borderRadius: "75px" }}>Sign Out</button>
    )
  }
}

export default SignOut