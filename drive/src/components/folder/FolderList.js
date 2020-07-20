import React from 'react'
import ReactDOM from 'react-dom'

import Folder from './Folder'

const FolderList = (props) => {
  var { folders } = props
  const renderList = folders.map(folder => {
    return (
      <Folder folder={folder} />
    )
  })
  return (
    <div>
      { renderList }
    </div>
  )
}

export default FolderList