import React, { Component } from 'react'

import SignOut from '../Auth/SignOut'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">{this.props.name}</a>
          <SignOut />
        </nav>
      </div>
    )
  }
}

export default Navbar