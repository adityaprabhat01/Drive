import React from 'react'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { folders, openFolder } = props
  return (
    <div>
      <FolderList folders={folders} openFolder={openFolder} />
    </div>
  )
}

export default FolderView