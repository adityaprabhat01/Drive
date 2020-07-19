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
    emptyFolders: false,
    f1: null,
    f2: null,
    f3: null
  }

  componentDidMount() {
    const { downloadFile, removeFile, files, folders, emptyFolders } = this.props
    if (folders) {
      var f1 = Object.keys(folders)
      this.setState({ folders: true, f1: f1 })
    }
    if (emptyFolders) {
      var f3 = Object.keys(emptyFolders)
      this.setState({ emptyFolders: true, f3: f3 })
    }
    if (files) {
      var f2 = Object.keys(files)
      this.setState({ files: true, f2: f2 })
    }
  }

  render() {
    const { downloadFile, removeFile, files, folders } = this.props
    const { f1, f2, f3 } = this.state

    return (
      <div>
        { this.state.files ? ( <FileView files={files} /> ) : null }
        { this.state.folders ? ( <FolderView files={f2} folders={f1} /> ) : null }
        { this.state.emptyFolders ? ( <FolderView folders={f3} empty={true} /> ) : null }
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
  console.log(state)
  return {
    files: state.firestore.firestore.files,
    folders: state.firestore.firestore.folders,
    emptyFolders: state.firestore.firestore.emptyFolders
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)