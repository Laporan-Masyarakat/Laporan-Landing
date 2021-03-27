import React from 'module'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './Components/Auth/LoginScreen'
import HomeScreen from './Components/HomeScreen'

function App() {
  return (
    <>
      <Router>
        <Route path="/login">
          {/* Login Screen */}
          <LoginScreen />
        </Route>

        <Route exact path="/">
          {/* Content */}
          <HomeScreen />
        </Route>

        {/* Footer */}
        <footer className="pt-5">
          <div className="container">
            <section class="footer-content text-center">
              <h2>Ayo Segera Laporkan Aspirasi Anda</h2>
              <p>
                If there is something we can help you with, just let us know.
                We'll be more than happy to offer you our help.
              </p>
              <button
                class="btn mt-3"
                style={{ backgroundColor: '#5EBAF0', color: 'white' }}
              >
                Lebih Dekat Dengan Kami
              </button>
              <p class="footer-social-links text-center my-4">
                <a href="#" class="icon-fb">
                  <i class="mdi mdi-facebook-box"></i>
                </a>
                <a href="#" class="icon-twitter">
                  <i class="mdi mdi-twitter-box"></i>
                </a>
                <a href="#" class="icon-insta">
                  <i class="mdi mdi-instagram"></i>
                </a>
              </p>
            </section>
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
