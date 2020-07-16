import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'firebase/firestore'
import 'firebase/storage'
import { createStore, applyMiddleware, compose } from 'redux'
// import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
// import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'

import App from './App'
import rootReducer from './store/rootReducer'
// import { firebase, rrfConfig } from './config/firebase'

const store = createStore(
  rootReducer,
  //compose(
    applyMiddleware(thunk/*.withExtraArgument(getFirebase, getFirestore)*/) // diff from docs
  //)
)


// redux-firestore configuration
// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

ReactDOM.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  document.getElementById('root')
)