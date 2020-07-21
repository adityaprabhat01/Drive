import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { recursiveTraversal } from '../../store/actions/recursiveTraversalAction'
import { currentPath } from '../../store/actions/currentPathAction'
import { downloadFile } from '../../store/actions/downloadAction'
import { removeFile } from '../../store/actions/removeAction'
import Breadcrumb from '../infobar/Breadcrumb'
import FolderView from '../folder/FolderView'
import FileView from '../file/FileView'

class Dashboard extends Component {

  state = {
    files: false,
    folders: false,
    f1: [],
    open: false,
    home: false
  }

  componentDidMount() {
    this.loadDashboard()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.setState({ open: true })
    }
  }

  loadDashboard = () => {
    const { files, folders } = this.props
    this.setState({ home: true })
    if (files) {
      this.setState({ files: true })
    }

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
  }

  loadFolder = () => {
    const { pwd } = this.props
    const { f, r } = pwd.pwd
    var folderArray = Object.keys(r.folders).map(key => {
      return r.folders[key]
    })
    return [f, folderArray, r.files]
  }

  openFolder = (e, id) => {
    this.setState({ open: false, home: false })
    const { currentPath, recursiveTraversal } = this.props
    currentPath(id)
    recursiveTraversal(id)
  }

  goToHome = () => {
    this.setState({ home: true, open: false })
  }

  render() {

    const { files, path } = this.props
    const { f1 } = this.state
    if (this.state.open) {
      const p = path.currentPath.path
      return (
        <Redirect to={{ pathname: '/folder' + p }}  />
      )
    }

    if (this.state.home) {
      return (
        <div>
          {this.state.files ? (<FileView files={files} />) : null}
          {this.state.folders ? (<FolderView folders={f1} openFolder={this.openFolder} />) : null}
          <button type="button" className="btn btn-outline-primary">Download</button>
          <button type="button" className="btn btn-outline-primary">Remove</button>
        </div>
      )
    }

    return(
      <div>Loading</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    downloadFile: file => dispatch(downloadFile(file)),
    removeFile: file => dispatch(removeFile(file)),
    recursiveTraversal: id => dispatch(recursiveTraversal(id)),
    currentPath: (id, back) => dispatch(currentPath(id, back))
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    id: state.firestore.firestore.id,
    files: state.firestore.firestore.files,
    folders: state.firestore.firestore.folders,
    pwd: state.pwd,
    path: state.currentPath
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)