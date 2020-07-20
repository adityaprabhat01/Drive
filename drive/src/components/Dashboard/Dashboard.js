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
    f1: []
  }

  loadDashboard = () => {
    const { downloadFile, removeFile, files, folders } = this.props

    if (folders) {
      var fs = Object.keys(folders).map(key => {
        return {
          name: folders[key].name,
          id: folders[key].id
        }
      })
      
      fs.map((f) => {
        this.setState(prevState => ({
          f1: [...prevState.f1, f]
        }))
      })
      
      this.setState({ folders: true })
    }

    if (files) {
      this.setState({ files: true })
    }
  }

  componentDidMount() {
    this.loadDashboard()
  }

  render() {
    const { downloadFile, removeFile, files, folders } = this.props
    const { f1 } = this.state
    return (
      <div>
        {this.state.files ? (<FileView files={files} />) : null}
        {this.state.folders ? (<FolderView folders={f1} />) : null}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)