import React, { Component } from 'react'
import { removeFile } from '../../store/actions/removeAction'

class SideBar extends Component {
  render() {
    const { uploadFile, downloadFile, removeFile } = this.props
    const handleUploadFile = (e) => {
      e.preventDefault()
      const f = document.getElementById('upload-photo')
      uploadFile(f)
    }
    const handleDownloadFile = (e) => {
      e.preventDefault()
      downloadFile()
    }
    const handleRemoveFile = (e) => {
      e.preventDefault()
      removeFile()
    }
    return (
      <div>
        <div className="sidebar-sticky pt-3">
          SideBar
          <button type="button" className="btn btn-outline-primary" onClick={handleUploadFile}>
            Upload
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={handleDownloadFile}>
            Download
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={handleRemoveFile}>
            Remove
          </button>
          <label htmlFor="upload-photo">Browse...</label>
          <input type="file" name="photo" id="upload-photo" />
        </div>
      </div>
    )
  }
}

export default SideBar