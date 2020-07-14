import axios from 'axios'

import { storage } from '../../config/firebase'

export const downloadFile = (file = {}) => {
  return (dispatch, getState) => {
    // make async call to firebase
    storage.ref().child('images/4.jpg').getDownloadURL().then((url) => {
      console.log(url)
      axios.get(url, {
          responseType: 'arraybuffer'
        })
        .then(response => Buffer.from(response.data, 'binary').toString('base64'))
        .catch()
    }).catch(function (error) {});
    dispatch({ type: 'DOWNLOAD', file })
  }
}