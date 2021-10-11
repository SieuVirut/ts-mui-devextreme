import React, { useContext } from 'react'
import { LayoutProvider, LayoutContext } from '../Layout'
import { Route, Router, Switch } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';

const App = () => {
  return (
    <LayoutProvider>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/login'} component={Login} />
      </Switch>
    </LayoutProvider>
  )
}

export default App