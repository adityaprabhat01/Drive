import React from 'react'
import ReactDOM from 'react-dom'

import Folder from './Folder'

const FolderList = (props) => {
  var { folders, openFolder } = props
  const renderList = folders.map(folder => {
    return (
      <Folder folder={folder} openFolder={openFolder} />
    )
  })
  return (
    <div>
      { renderList }
    </div>
  )
}

export default FolderList