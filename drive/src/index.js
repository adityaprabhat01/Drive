import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'firebase/firestore'
import 'firebase/storage'
import { createStore, applyMiddleware } from 'redux'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import App from './App'
import rootReducer from './store/rootReducer'
import { firebase, rrfConfig} from './config/firebase'

const store = createStore(rootReducer, applyMiddleware(thunk))

// redux-firestore configuration
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)