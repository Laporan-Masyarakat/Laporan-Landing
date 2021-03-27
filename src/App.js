import React from 'module'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './Components/Auth/LoginScreen'
import RegisterScreen from './Components/Auth/RegisterScreen'
import HomeScreen from './Components/HomeScreen'

function App() {
  return (
    <>
      <Router>
        <Route path="/login">
          {/* Login Screen */}
          <LoginScreen />
        </Route>

        <Route path="/register">
          {/* Register Screen */}
          <RegisterScreen />
        </Route>

        <Route exact path="/">
          {/* Content */}
          <HomeScreen />
        </Route>

        {/* Footer */}
        <footer className="pt-5">
          <div className="container">
            <nav className="navbar navbar-light bg-transparent navbar-expand d-block d-sm-flex text-center">
              <span className="navbar-text">
                © Lapor Masyarakat. All rights reserved.
              </span>
              <div className="navbar-nav ml-auto justify-content-center">
                <a href="#" className="nav-link">
                  Support
                </a>
                <a href="#" className="nav-link">
                  Terms
                </a>
                <a href="#" className="nav-link">
                  Privacy
                </a>
              </div>
            </nav>
          </div>
        </footer>
      </Router>
    </>
  )
}

export default App
