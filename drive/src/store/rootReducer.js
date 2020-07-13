import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import downloadReducer from './reducers/downloadReducer'
import uploadReducer from './reducers/uploadReducer'
import removeReducer from './reducers/removeReducer'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  remove: removeReducer,
  download: downloadReducer,
  upload: uploadReducer
})

export default rootReducer