import React, { Component } from 'react'
import { connect } from 'react-redux'

import FolderView from './FolderView'
import FileView from '../file/FileView'
import { recursiveTraversal } from '../../store/actions/recursiveTraversalAction'
import { currentPath } from '../../store/actions/currentPathAction'

class NonEmptyFolder extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    this.openFolder()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.path !== this.props.path) {
      this.setState({ open: true })
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
    this.setState({ open: false })
    const { currentPath, recursiveTraversal } = this.props
    currentPath(id)
    recursiveTraversal(id)
  }

  render() {

    if (this.state.open) {
      const [f,r, files] = this.loadFolder()
      return (
        <div>
          <FolderView folders={r} openFolder={this.openFolder} />
          <FileView files={files} />
        </div>
      )
    }
    return (
      <div>Loading</div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    recursiveTraversal: id => dispatch(recursiveTraversal(id)),
    currentPath: id => dispatch(currentPath(id))
  }
}

const mapStateToProps = (state) => {
  return {
    pwd: state.pwd,
    path: state.currentPath
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NonEmptyFolder)