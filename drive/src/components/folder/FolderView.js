import React from 'react'
import ReactDOM from 'react-dom'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { files, folders } = props
  return (
    <div>
      <FolderList files={files} folders={folders} />
    </div>
  )
}

export default FolderView