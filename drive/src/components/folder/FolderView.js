import React from 'react'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { folders, openFolder, source, remove } = props
  return (
    <div>
      <FolderList folders={folders} openFolder={openFolder} source={source} remove={remove} />
    </div>
  )
}

export default FolderView