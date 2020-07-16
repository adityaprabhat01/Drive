import { db } from '../../config/firebase'

// user dependent
const u = 'FgNx3Hw1ZLCxLfMjvB1u'

function dataRequest() {
  return {
    type: 'REQUEST_DATA'
  }
}

function dataReceived(data) {
  return {
    type: 'DATA_RECEIVED',
    data
  }
}

function dataFailure() {
  return {
    type: 'RECEIVE_FAILURE'
  }
}

export const firestore = () => { 
  return async (dispatch, getState) => {
    dispatch(dataRequest())
    await db.collection('users').doc(u).get()
      .then(doc => {
        dispatch(dataReceived(doc.data()))
    })
      .catch(e => dispatch(dataFailure()))
  }
}