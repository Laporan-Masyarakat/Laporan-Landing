import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function HeaderScreen() {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)
  const token = localStorage.getItem('token')

  const logoutFunc = async () => {
    MySwal.fire({
      title: 'currently logged out of account...',
      didOpen: () => {
        MySwal.showLoading()
      },
    })
    try {
      const getLogout = await fetch(`${API_URL}api/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const logout = await getLogout.json()
      console.log(logout)
      if (logout.success) {
        localStorage.clear()
        window.location.href = '/'
        MySwal.close()
      }
    } catch (error) {
      console.log(error)
    }
  }
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
                {!token ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                    <form action="#" className="form-inline ml-lg-3">
                      <button className="btn btn-light">Daftar</button>
                    </form>
                  </>
                ) : (
                  <>
                    {/* User Dropdown*/}
                    <li className="nav-item dropdown no-caret mr-3 mr-lg-0 dropdown-user">
                      <a
                        className="btn btn-icon btn-transparent-dark dropdown-toggle"
                        id="navbarDropdownUserImage"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          className="img-fluid"
                          src={`https://ui-avatars.com/api/?name=${localStorage.getItem(
                            'username',
                          )}`}
                          style={{
                            borderRadius: 100,
                            width: 50,
                            marginRight: 10,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-left border-0 shadow animated--fade-in-up"
                        aria-labelledby="navbarDropdownUserImage"
                      >
                        <h6 className="dropdown-header d-flex align-items-center">
                          <img
                            className="dropdown-user-img"
                            src={`https://ui-avatars.com/api/?name=${localStorage.getItem(
                              'username',
                            )}`}
                            style={{
                              borderRadius: 100,
                              width: 50,
                              marginRight: 10,
                            }}
                          />
                          <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name text-black">
                              {localStorage.getItem('username')}
                            </div>
                          </div>
                        </h6>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" onClick={logoutFunc}>
                          <div className="dropdown-item-icon">
                            <i data-feather="log-out" />
                          </div>
                          Logout
                        </a>
                      </div>
                    </li>
                  </>
                )}
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
