import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import FolderView from './FolderView'
import FileView from '../file/FileView'
import Breadcrumb from '../infobar/Breadcrumb'
import { recursiveTraversal } from '../../store/actions/recursiveTraversalAction'
import { currentPath } from '../../store/actions/currentPathAction'

class NonEmptyFolder extends Component {

  state = {
    open: false,
    others: false
  }

  componentDidMount() {
    this.setState({ open: true })
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

  openFolder = (e, id, back) => {
    this.setState({ open: false, others: true })
    const { currentPath, recursiveTraversal } = this.props
    currentPath(id, back)
    recursiveTraversal(id)
  }
  
  render() {

    if (this.state.open) {
      const [f,r, files] = this.loadFolder()
      return (
        <div>
          <Breadcrumb openFolder={this.openFolder} />  
          <FolderView folders={r} openFolder={this.openFolder} source='inner' />
          <FileView files={files} />
        </div>
      )
    }

    if (this.state.others) {
      const { path } = this.props
      const p = path.currentPath.path
      return (
        <Redirect to={{ pathname: '/folder' + p }}  />
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
    currentPath: (id, back) => dispatch(currentPath(id, back))
  }
}

const mapStateToProps = (state) => {
  return {
    pwd: state.pwd,
    path: state.currentPath
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NonEmptyFolder)