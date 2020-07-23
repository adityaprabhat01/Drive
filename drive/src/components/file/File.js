import React, { Component } from 'react'

class File extends Component {
  state = {
    fileName: this.props.fileName,
    url: this.props.url,
    view: false
  }

  render() {

    return (
      <div className="d-flex flex-column" id={this.state.fileName}>
        <a href={this.state.url}>
          <div href={this.state.url}>
            <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-file-earmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
              <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
            </svg>
          </div>
          <span className="text-center">{this.state.fileName}</span>
        </a>
        <button type="button" className="btn btn-outline-primary" id={this.state.url} onClick={e => this.props.download(e)}>Download</button>
        <button type="button" className="btn btn-outline-primary" onClick={e => this.props.remove(e)}>Remove</button>
      </div>
    )
  }
}

export default File