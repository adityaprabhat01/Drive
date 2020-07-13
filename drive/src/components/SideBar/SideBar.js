import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    const { uploadFile } = this.props

    const handleSubmit = (e) => {
      e.preventDefault()
      let file = 'upload file function'
      console.log('button triggered')
      uploadFile(file)
    }
    return (
      <div>
        <div className="sidebar-sticky pt-3">
          SideBar
          <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>
            Upload
          </button>
          <label htmlFor="upload-photo">Browse...</label>
          <input type="file" name="photo" id="upload-photo" />
        </div>
      </div>
    )
  }
}

export default SideBar