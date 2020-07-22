import React from 'react'

import FolderList from './FolderList'

const FolderView = (props) => {
  var { folders, openFolder, source } = props
  return (
    <div>
      <FolderList folders={folders} openFolder={openFolder} source={source} />
    </div>
  )
}

export default FolderView