import React from 'react'
import ReactDOM from 'react-dom'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { files, folders, empty } = props
  return (
    <div>
      <FolderList files={files} folders={folders} empty={empty} />
    </div>
  )
}

export default FolderView