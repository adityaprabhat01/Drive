import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Breadcrumb extends Component {

  state = {
    back: false,
    home: false
  }

  createLi = (n, b) => {
    var lis = []
    for (let i = 0; i < n; i++) {
      lis[i] = React.createElement('li', { className: 'breadcrumb-item', id: b[i].id, onClick: this.handleClick }, b[i].name)
    }
    return lis
  }

  componentDidUpdate(prevProps) {
    if(prevProps.path !== this.props.path) {
      this.setState({ back: true })
    }
  }
  

  handleClick = (e) => {
    e.preventDefault()
    const id = e.target.id
    this.props.openFolder(e, e.target.id, true)
  }

  goToHome = (e) => {
    e.preventDefault()
    this.setState({ home: true })
  }

  render() {
    const { path } = this.props
    const breadcrumb = path.currentPath.breadcrumb
    const lis = this.createLi(breadcrumb.length, breadcrumb)

    if (this.state.home) {
      return (
        <Redirect to={{ pathname: '/drive', state: { uid: this.props.id } }}  />
      )
    }

    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" onClick={this.goToHome}>Home</li>
          {lis}
        </ol>
      </nav>
    )
  }
}




const mapStateToProps = (state) => {
  console.log(state)
  return {
    path: state.currentPath,
    id: state.firestore.firestore.name,
    pwd: state.pwd
  }
}

export default connect(mapStateToProps)(Breadcrumb)