import React from 'react'

import File from './File'

const FileList = (props) => {
  const { files } = props
  const renderList = Object.keys(files).map(file => {
    
    return (
      
        <File file={files[file]} />
      
    )
  })
  return (
    <div className="d-flex flex-row">
      { renderList }
    </div>
  )
}

export default FileList