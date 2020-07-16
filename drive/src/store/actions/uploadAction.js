import firebase from 'firebase/app'

import { storage, db } from '../../config/firebase'

function uploadRequest() {
  return {
    type: 'UPLOAD_REQUEST'
  }
}

function uploadSuccess() {
  return {
    type: 'UPLOAD_SUCCESS'
  }
}

function uploadFailure() {
  return {
    type: 'UPLOAD_FAILURE'
  }
}

// pass folder/file address wrt root from SideBar component
export const uploadFile = (f = {}) => {

  return (dispatch, getState) => {
    var state = getState()
    let file = f.files[0]
    let storageFolder = '/images'
    let fileName = file.name
    let storageRef = storage.ref(storageFolder + fileName)

    dispatch(uploadRequest())

    storageRef.put(file)
      .then(() => {
        storageRef.getDownloadURL()
          .then(url => {
            // add user's doc
            db.collection('users').doc('FgNx3Hw1ZLCxLfMjvB1u').update({
              files: firebase.firestore.FieldValue.arrayUnion(url),
              name: 'prabhat'
            })
              .then((ref) => { console.log(ref) })
              .catch((e) => { console.log(e) });
          })
          .catch(e => { })
        dispatch(uploadSuccess())
      })
      .catch(e => dispatch(uploadFailure()))
  }
}