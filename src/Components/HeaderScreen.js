import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function HeaderScreen() {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)
  const token = localStorage.getItem('token')
  const [datatanggapan, setDataTanggapan] = useState('')

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
          Authorization: `Bearer ${token}`,
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

  // get data tanggapan
  const getTanggapan = async () => {
    try {
      const data = await fetch(`${API_URL}api/gettanggapan`, {
        method: 'GET',
      })
      const result = await data.json()
      console.log(result.result)
      setDataTanggapan(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    getTanggapan()
  }, [])

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
                    <button
                      className="btn btn-light ml-lg-3"
                      onClick={() => (window.location.href = '/register')}
                    >
                      Daftar
                    </button>
                  </>
                ) : (
                  <>
                    {/* Alerts Dropdown*/}
                    <li className="nav-item dropdown no-caret d-none d-sm-block dropdown-notifications">
                      <a
                        className="btn btn-icon btn-transparent-dark dropdown-toggle"
                        id="navbarDropdownAlerts"
                        href="javascript:void(0);"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-bell" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
                        aria-labelledby="navbarDropdownAlerts"
                        style={{ paddingBottom: 30 }}
                      >
                        <h6 className="dropdown-header dropdown-notifications-header">
                          <i className="mdi mdi-bell mr-2" />
                          Tanggapan
                        </h6>
                        {/* Example Alert 1*/}
                        {datatanggapan.length > 0 ? (
                          datatanggapan.map((item, i) => (
                            <a
                              className="dropdown-item dropdown-notifications-item"
                              href="#!"
                              key={i}
                            >
                              <div
                                className="bg-secondary"
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 100,
                                  marginRight: 20,
                                  paddingTop: 5,
                                }}
                              >
                                <i
                                  className="mdi mdi-book"
                                  style={{
                                    color: 'white',
                                    marginLeft: 10,
                                    fontSize: 20,
                                  }}
                                />
                              </div>
                              <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">
                                  {item.tgl_tanggapan}
                                </div>
                                <div className="dropdown-notifications-item-content-text">
                                  {item.isi_tanggapan}
                                </div>
                              </div>
                            </a>
                          ))
                        ) : (
                          <p className="text-center">Tidak Ada Tanggapan</p>
                        )}
                      </div>
                    </li>
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
