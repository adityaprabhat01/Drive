import axios from 'axios'

import { storage } from '../../config/firebase'

export const removeFile = () => {
  return (dispatch, getState) => {
    console.log('remove')
    var f = storage.ref().child('images/1.jpg');
    f.delete()
      .then(() => console.log('File Deleted'))
      .catch()
  }
}