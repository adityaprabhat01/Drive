import React, { Component } from 'react'

import Searchbar from './Searchbar'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <Searchbar />
        </nav>
      </div>
    )
  }
}

export default Navbar