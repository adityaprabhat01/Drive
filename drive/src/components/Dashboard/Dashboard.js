import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { downloadFile } from '../../store/actions/downloadAction'
import { removeFile } from '../../store/actions/removeAction'

class Dashboard extends Component {
  render() {

    // console.log(this.props)

    const { downloadFile, removeFile } = this.props
    
    return (
      <div>
        Dashboard
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

export default compose (
  connect(null, mapDispatchToProps)
)(Dashboard)