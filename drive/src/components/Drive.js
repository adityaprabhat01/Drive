import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'

import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Dashboad from './Dashboard/Dashboard'
import { uploadFile } from '../store/actions/uploadAction'

class Drive extends Component {
  render() {
    // console.log(this.props)

    const { uploadFile } = this.props

    return (
      <div className="container-fluid p-1 d-flex flex-column">
        <Navbar />
        <div className="d-flex flex-row">
          <SideBar uploadFile={uploadFile} />
          <Dashboad />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: file => dispatch(uploadFile(file))
  }
}

const mapStateToProps = (state) => {
  const { upload } = state
  return {
    upload,
    user: state.firestore.ordered.users
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ['users']) // avails firestore data to component
)(Drive)