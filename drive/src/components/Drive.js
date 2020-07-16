import { connect } from 'react-redux'
import React, { Component } from 'react'

import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import Dashboad from './Dashboard/Dashboard'
import { firestore } from '../store/actions/firestoreAction'

class Drive extends Component {

  state = { isUserLoaded: false }

  componentDidMount() {
    const { firestore } = this.props
    firestore()
      .then(() => {
        this.setState({ isUserLoaded: true })
      })
      .catch(e => console.log(e))
  }

  render() {
    
    let { user } = this.props
    
    // console.log(user)

    return (
      <div className="container-fluid p-1 d-flex flex-column">
        <Navbar />
        <div className="d-flex flex-row">
          <SideBar  />
          { this.state.isUserLoaded ? ( <Dashboad /> ) : null }
        </div>
      </div>
    )
  }
}

// these actionCreators will be inside props of the component
const mapDispatchToProps = (dispatch) => {
  return {
    firestore: () => dispatch(firestore())
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.firestore.firestore
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drive)