import React from 'react'

import FileList from './FileList'

const FileView = (props) => {
  var { files, download, remove } = props
  
  return (
    <div>
      <FileList files={files} download={download} remove={remove} />
    </div>
  )
}

export default FileView