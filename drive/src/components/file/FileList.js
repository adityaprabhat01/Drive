import React from 'react'

import File from './File'

const FileList = (props) => {
  const { files, download, remove } = props
  const renderList = Object.keys(files).map(file => {
    return (
      
        <File url={files[file]} fileName={file} download={download} remove={remove} />
      
    )
  })
  return (
    <div className="d-flex flex-row">
      { renderList }
    </div>
  )
}

export default FileList