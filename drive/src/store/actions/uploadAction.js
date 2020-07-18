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
export const uploadFile = (f = {}, uid, firestoreFiles) => {
  return (dispatch, getState) => {
    var state = getState()
    const { firestore } = state
    let file = f.files[0]
    let storageFolder = uid
    let fileName = file.name
    let storageRef = storage.ref('/' + storageFolder + '/' + fileName)
    
    dispatch(uploadRequest())

    storageRef.put(file)
      .then(() => {
        storageRef.getDownloadURL()
          .then(url => {
            // add user's doc
            // can't directly update the map, get then create new
            firestore.firestore.files[fileName] = url
            db.collection('users').doc(uid).set({
              // files: firebase.firestore.FieldValue.arrayUnion(url)
              // files: firebase.firestore.FieldValue.arrayUnion(url)
              ...firestore.firestore,
              files: firestore.firestore.files
              
            })
              .then((doc) => { console.log(doc.data()) })
              .catch((e) => { console.log(e) });
          })
          .catch(e => { })
        dispatch(uploadSuccess())
      })
      .catch(e => dispatch(uploadFailure()))
  }
}