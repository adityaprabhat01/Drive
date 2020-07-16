import React, { Component } from 'react'
import { connect } from 'react-redux'

import { downloadFile } from '../../store/actions/downloadAction'
import { removeFile } from '../../store/actions/removeAction'
import FolderView from '../folder/FolderView'
import FileView from '../file/FileView'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { downloadFile, removeFile, files, folders } = this.props
    
    var f1 = Object.keys(folders)
    var f2 = Object.keys(files)

    return (
      <div>
        <FolderView files={f2} folders={f1} />
        <FileView files={files} />
        <button type="button" className="btn btn-outline-primary" onClick={downloadFile}>Download</button>
        <button type="button" className="btn btn-outline-primary" onClick={removeFile}>Remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    downloadFile: file => dispatch(downloadFile(file)),
    removeFile: file => dispatch(removeFile(file))
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    files: state.firestore.firestore.files,
    folders: state.firestore.firestore.folders
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)