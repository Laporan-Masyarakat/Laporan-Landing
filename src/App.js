import HeaderScreen from './Components/HeaderScreen'
import HomeScreen from './Components/HomeScreen'

function App() {
  return (
    <>
      {/* Navbar Screen */}
      <HeaderScreen />

      {/* Content */}
      <HomeScreen />

      {/* Footer */}
      <footer className="pt-5 mt-2">
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
    </>
  )
}

export default App
