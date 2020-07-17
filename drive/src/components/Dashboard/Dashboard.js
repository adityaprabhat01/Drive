import React, { Component } from 'react'
import { connect } from 'react-redux'

import { downloadFile } from '../../store/actions/downloadAction'
import { removeFile } from '../../store/actions/removeAction'
import FolderView from '../folder/FolderView'
import FileView from '../file/FileView'

class Dashboard extends Component {

  state = { 
    files: false,
    folders: false,
    f1: null,
    f2: null
  }
  
  componentDidMount() {
    const { downloadFile, removeFile, files, folders } = this.props
    if (folders) {
      var f1 = Object.keys(folders)
      this.setState({ folders: true, f1: f1 })
    }
    if (files) {
      var f2 = Object.keys(files)
      this.setState({ files: true, f1: f1 })
    }
  }

  render() {
    const { downloadFile, removeFile, files, folders } = this.props
    const { f1, f2 } = this.state

    return (
      <div>
        { this.state.files ? ( <FileView files={files} /> ) : null }
        { this.state.folders ? ( <FolderView files={f2} folders={f1} /> ) : null }
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
  return {
    files: state.firestore.firestore.files,
    folders: state.firestore.firestore.folders
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)