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
          <section className="footer-content text-center">
            <h2 className>Clean and simple theme built with Bootstrap 4</h2>
            <p>
              If there is something we can help you with, just let us know.
              We'll be more than happy to offer you our help.
            </p>
            <button className="btn btn-success mt-3">Download Now</button>
            <p className="footer-social-links text-center my-4">
              <a href="#" className="icon-fb">
                <i className="mdi mdi-facebook-box" />
              </a>
              <a href="#" className="icon-twitter">
                <i className="mdi mdi-twitter-box" />
              </a>
              <a href="#" className="icon-insta">
                <i className="mdi mdi-instagram" />
              </a>
              <a href="#" className="icon-behance">
                <i className="mdi mdi-behance" />
              </a>
              <a href="#" className="icon-dribbble">
                <i className="mdi mdi-dribbble-box" />
              </a>
              <a href="#" className="icon-github">
                <i className="mdi mdi-github-circle" />
              </a>
            </p>
          </section>
          <nav className="navbar navbar-light bg-transparent navbar-expand d-block d-sm-flex text-center">
            <span className="navbar-text">
              © BootstrapDash. All rights reserved.
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
