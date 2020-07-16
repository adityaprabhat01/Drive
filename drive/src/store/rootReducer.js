import { combineReducers } from 'redux'
// import { firestoreReducer } from 'redux-firestore'
// import { firebaseReducer } from 'react-redux-firebase'

import downloadReducer from './reducers/downloadReducer'
import uploadReducer from './reducers/uploadReducer'
import removeReducer from './reducers/removeReducer'
import firestoreReducer from './reducers/firestoreReducer'

const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
  
  remove: removeReducer,
  download: downloadReducer,
  upload: uploadReducer,
  firestore: firestoreReducer
})

export default rootReducer