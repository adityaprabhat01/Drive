import { connect } from 'react-redux'
import React, { Component } from 'react'

import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Dashboad from './Dashboard/Dashboard'
import { firestore } from '../store/actions/firestoreAction'

class Drive extends Component {

  state = {
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

    return (
      <div className="container-fluid p-1 d-flex flex-column">
        { user ? (<span>{user.name}</span>) : null }
        <Navbar />
        <div className="d-flex flex-row">
          <SideBar />
          {this.state.isUserLoaded ? (<Dashboad />) : null}
        </div>
      </div>
    )
  }
}

// these actionCreators will be inside props of the component
const mapDispatchToProps = (dispatch) => {
  return {
    firestore: (uid) => dispatch(firestore(uid))
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.firestore.firestore
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drive)