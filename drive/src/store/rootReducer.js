import { combineReducers } from 'redux'

import downloadReducer from './reducers/downloadReducer'
import uploadReducer from './reducers/uploadReducer'
import removeReducer from './reducers/removeReducer'
import firestoreReducer from './reducers/firestoreReducer'
import createFolderReducer from './reducers/createFolderReducer'
import recursiveTraversalReducer from './reducers/recursiveTraversalReducer'
import currentPathReducer from './reducers/currentPathReducer'

const rootReducer = combineReducers({
  remove: removeReducer,
  download: downloadReducer,
  upload: uploadReducer,
  firestore: firestoreReducer,
  createFolder: createFolderReducer,
  recrsiveTraversal: recursiveTraversalReducer,
  currentPath: currentPathReducer
})

export default rootReducer