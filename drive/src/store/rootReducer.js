import { combineReducers } from 'redux'

import downloadReducer from './reducers/downloadReducer'
import uploadReducer from './reducers/uploadReducer'
import removeReducer from './reducers/removeReducer'
import firestoreReducer from './reducers/firestoreReducer'
import createUserReducer from './reducers/createUserReducer'
import createFolderReducer from './reducers/createFolderReducer'

const rootReducer = combineReducers({
  remove: removeReducer,
  download: downloadReducer,
  upload: uploadReducer,
  firestore: firestoreReducer,
  createUser: createUserReducer,
  createFolder: createFolderReducer
})

export default rootReducer