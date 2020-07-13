import React, { Component } from 'react'

import Searchbar from './Searchbar'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <Searchbar />
        </nav>
      </div>
    )
  }
}

export default Navbar