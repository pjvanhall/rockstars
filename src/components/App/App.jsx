import React from 'react'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Artists } from '../Artists/Artists'
import { Songs } from '../Songs/Songs'
import './App.scss'

const queryClient = new QueryClient()

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: '#FFFFFF',
      backgroundColor: '#000000',
      textAlign: 'center'
    }
  }
})

const App = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
          <Container>
            <Typography component={'div'}>
              <div className="App">
                <Switch>
                  <Route path="/songs/:artist">
                    <Songs />
                  </Route>
                  <Route path="/">
                    <Artists />
                  </Route>
                </Switch>
              </div>
            </Typography>
          </Container>
      </ThemeProvider>
    </QueryClientProvider>
  </Router>
)

export default App
