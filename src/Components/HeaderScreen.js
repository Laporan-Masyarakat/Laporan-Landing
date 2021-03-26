import React from 'react'

function HeaderScreen() {
  return (
    <>
      <header className="miri-ui-kit-header landing-header header-bg-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-on-scroll">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#miriUiKitNavbar"
              aria-controls="navbarSupportedContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="mdi mdi-menu" />
            </button>
            <div className="collapse navbar-collapse" id="miriUiKitNavbar">
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Login
                  </a>
                </li>
                <form action="#" className="form-inline ml-lg-3">
                  <button className="btn btn-danger">Daftar</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
        <div className="miri-ui-kit-header-content text-center text-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 text-white">
            <b>Laporkan Sekarang!</b>
          </h1>
          <p className="h3 font-weight-light text-white">
            A beautiful premium bootstrap 4 developed by bootstrapdash.
          </p>
        </div>
      </header>
    </>
  )
}

export default HeaderScreen
