import React from 'react'
import ReactDOM from 'react-dom'

import Folder from './Folder'

const FolderList = (props) => {
  var { folders, openFolder, source, remove } = props
  const renderList = folders.map(folder => {
    return (
      <Folder folder={folder} openFolder={openFolder} source={source} remove={remove} />
    )
  })
  return (
    <div>
      { renderList }
    </div>
  )
}

export default FolderList