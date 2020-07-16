import React from 'react'
import ReactDOM from 'react-dom'

import Folder from './Folder'

const FolderList = (props) => {
  var { files, folders } = props
  const renderList = folders.map(folder => {
    return (
      <Folder files={files} folder={folder} />
    )
  })
  return (
    <div>
      { renderList }
    </div>
  )
}

export default FolderList