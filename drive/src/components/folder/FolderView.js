import React from 'react'
import ReactDOM from 'react-dom'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { folders } = props
  return (
    <div>
      <FolderList folders={folders} />
    </div>
  )
}

export default FolderView