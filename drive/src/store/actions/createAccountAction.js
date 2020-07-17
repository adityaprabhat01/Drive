import { db } from '../../config/firebase'

function request() {
  return {
    type: 'ACCOUNT_CREATION_REQUEST'
  }
}

function received() {
  return {
    type: 'ACCOUNT_CREATED'
  }
}

export const createAccount = (userData) => {
  return async (dispatch, getState) => {
    const files = new Object()
    const folders = new Object()
    const emptyFolders = new Object()
    dispatch(request())
    const { name, email, uid } = userData
    await db.collection('users').doc(uid).set({
      name,
      email,
      uid,
      files,
      folders,
      emptyFolders
    })
    .then(() => dispatch(received()))
    .catch(e => console.log(e))
  }
}