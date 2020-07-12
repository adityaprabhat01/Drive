import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <div>
        <div class="sidebar-sticky pt-3">
          SideBar
          <button type="button" class="btn btn-outline-primary">
            Upload
          </button>
          <label for="upload-photo">Browse...</label>
          <input type="file" name="photo" id="upload-photo" />
        </div>

      </div>

    )
  }
}

export default SideBar