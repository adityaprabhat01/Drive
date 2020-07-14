import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import NavBar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { uploadFile } from '../../store/actions/uploadAction'
import { downloadFile } from '../../store/actions/downloadAction'
import { removeFile } from '../../store/actions/removeAction'

class Drive extends Component {
  render() {
    
    console.log(this.props)

    const { uploadFile, downloadFile, removeFile } = this.props
    
    return (
      <div>
      <img className="fire" src=""></img>
        <NavBar />
        <SideBar uploadFile={ uploadFile } downloadFile={ downloadFile } removeFile={ removeFile } />
        Drive
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: file => dispatch(uploadFile(file)),
    downloadFile: file => dispatch(downloadFile(file)),
    removeFile: file => dispatch(removeFile(file))
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  const { upload, download, remove } = state
  return {
    upload,
    download,
    remove,
    user: state.firestore.ordered.users
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ['users'])
)(Drive)