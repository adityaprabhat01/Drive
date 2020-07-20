import { db } from '../../config/firebase'

function request() {
  return {
    type: 'CREATE_FOLDER_REQUEST'
  }
}

function received() {
  return {
    type: 'FOLDER_CREATED'
  }
}

export const createFolder = (fName, uid) => {
  return async (dispatch, getState) => {
    var state = getState()
    const { firestore } = state
    dispatch(request())
    firestore.firestore.emptyFolders[fName] = fName
    console.log(firestore.firestore.emptyFolders)
    
    await db.collection('users').doc(uid).set({
      ...firestore.firestore,
      emptyFolders: firestore.firestore.emptyFolders
    })
  }
}