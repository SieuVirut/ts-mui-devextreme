import React, { useContext } from 'react'
import { LayoutProvider, LayoutContext } from '../Layout'
import { themeDefault } from '../../styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Router, Switch } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home'
const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <LayoutProvider>
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/'} component={Home} />
        </Switch>
      </LayoutProvider>
    </ThemeProvider>
  )
}

export default App