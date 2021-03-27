import React from 'react'

function HeaderScreen() {
  return (
    <>
      <header className="miri-ui-kit-header landing-header header-bg-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-on-scroll">
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
                  <a className="nav-link" href="#">
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
        <div className="miri-ui-kit-header-content text-center text-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 text-white">
            <b>Layanan Aspirasi dan Laporan Masyarakat</b>
          </h1>
          <p className="h3 font-weight-light text-white">
            Sampaikan laporan anda langsung secara online dan hanya dirumah aja
          </p>
        </div>
      </header>
    </>
  )
}

export default HeaderScreen
