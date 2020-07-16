import React from 'react'

import FileList from './FileList'

const FileView = (props) => {
  var { files } = props
  
  return (
    <div>
      <FileList files={files} />
    </div>
  )
}

export default FileView