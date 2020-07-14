import axios from 'axios'

import { storage } from '../../config/firebase'

export const uploadFile = (f = {}) => {
  return (dispatch, getState) => {
    console.log('Action created file upload and dispatch')
    // make async call to firebase
    
    let file = f.files[0]
    let storageFolder = '/images/'
    let fileName = file.name
    let storageRef = storage.ref(storageFolder + fileName)
    storageRef.put(file)
      .then(() => console.log('Upload Success'))
      .catch()
    dispatch({ type: 'UPLOAD', file })
  }
}



    
    
    
    