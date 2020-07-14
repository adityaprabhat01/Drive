import axios from 'axios'

import { storage } from '../../config/firebase'

export const downloadFile = (file = {}) => {
  return (dispatch, getState) => {
    // make async call to firebase
    var x = document.getElementsByClassName('fire')
    console.log(x)
    storage.ref().child('images/3.jpg').getDownloadURL().then((url) => {
      console.log(url)
      // x.src = url
      axios.get(url, {
          responseType: 'arraybuffer'
        })
        .then(response => Buffer.from(response.data, 'binary').toString('base64'))
        .catch()
    }).catch(function (error) {});
    storage.ref().child('/3.jpg').getMetadata().then((d) => console.log(d))
    dispatch({ type: 'DOWNLOAD', file })
  }
}