import React from 'react'

function HeaderLogin() {
  return (
    <>
      <header className="miri-ui-kit-header header-navbar-only">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="row">
                <div className="col-sm-1" style={{ paddingRight: '10%' }}>
                  <img
                    style={{
                      height: 40,
                    }}
                    src="assets/images/logolapor.png"
                    alt="logo"
                  />
                </div>
                <div className="col" style={{ paddingTop: '2%' }}>
                  <p className="nav-link" style={{ fontSize: 20 }}>
                    Lapor Masyarakat
                  </p>
                </div>
              </div>
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
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <form action="#" className="form-inline ml-lg-3">
                  <button className="btn btn-light">Daftar</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderLogin
