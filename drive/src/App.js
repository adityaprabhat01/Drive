import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Drive from './components/Dashboard/Drive'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/drive' component={Drive} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App