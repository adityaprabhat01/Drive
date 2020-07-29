import { connect } from 'react-redux'
import React, { Component } from 'react'

import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Dashboad from './Dashboard/Dashboard'
import { firestore } from '../store/actions/firestoreAction'

class Drive extends Component {

  state = {
    // this.props.auth.uid Use with local storage
    uid: this.props.location.state.uid,
    isUserLoaded: false
  }

  componentDidMount() {
    const { firestore } = this.props
    firestore(this.state.uid)
      .then(() => {
        this.setState({ isUserLoaded: true })
      })
      .catch(e => console.log(e))
  }

  render() {

    let { user } = this.props
    let u = user ? user.username : null
    return (
      <div className="container-fluid p-1 d-flex flex-column">
        <Navbar name={u} />
        <div className="d-flex flex-row">
          {this.state.isUserLoaded ? (<SideBar source={'home'} />) : null}
          {this.state.isUserLoaded ? (<Dashboad />) : null}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firestore: (uid) => dispatch(firestore(uid))
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.firestore.firestore,
    path: state.currentPath,
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drive)