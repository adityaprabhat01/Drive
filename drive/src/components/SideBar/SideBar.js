import React, { Component } from 'react'
import { connect } from 'react-redux'

import { uploadFile } from '../../store/actions/uploadAction'
import { createFolder } from '../../store/actions/createFolderAction'

class SideBar extends Component {
  render() {

    const { uploadFile, createFolder ,firestore, source } = this.props
    const { uid } = firestore
    
    const handleUploadFile = (e) => {
      e.preventDefault()
      const f = document.getElementById('upload-file')
      uploadFile(f, source)
    }

    const handleCreateFolder = (e) => {
      e.preventDefault()
      createFolder('adityaImages', uid)
    }
    
    return (
      <div className="sidebar-sticky pt-3 d-flex flex-column">
        SideBar

        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg width="4em" height="2em" viewBox="0 0 16 16" className="bi bi-upload" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8zM5 4.854a.5.5 0 0 0 .707 0L8 2.56l2.293 2.293A.5.5 0 1 0 11 4.146L8.354 1.5a.5.5 0 0 0-.708 0L5 4.146a.5.5 0 0 0 0 .708z" />
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 2z" />
            </svg>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button type="button" className="btn  btn-outline-primary dropdown-item" onClick={handleUploadFile}>File Upload</button>
            <button type="button" className="btn  btn-outline-primary dropdown-item">Folder Upload</button>
            <button type="button" className="btn btn-outline-primary dropdown-item" onClick={handleCreateFolder}>Create Folder</button>
          </div>
        </div>

        <label htmlFor="upload-photo">Browse...</label>
        <input type="file" name="photo" id="upload-file" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: (file, source) => dispatch(uploadFile(file, source)),
    createFolder: (f, uid) => dispatch(createFolder(f, uid))
  }
}

const mapStateToProps = (state) => {
  return {
    firestore: state.firestore.firestore
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)