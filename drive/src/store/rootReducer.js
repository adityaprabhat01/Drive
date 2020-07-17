import { combineReducers } from 'redux'

import downloadReducer from './reducers/downloadReducer'
import uploadReducer from './reducers/uploadReducer'
import removeReducer from './reducers/removeReducer'
import firestoreReducer from './reducers/firestoreReducer'
import createUserReducer from './reducers/createUserReducer'

const rootReducer = combineReducers({
  remove: removeReducer,
  download: downloadReducer,
  upload: uploadReducer,
  firestore: firestoreReducer,
  createUser: createUserReducer
})

export default rootReducer