import React from 'react'
import HeaderLogin from '../HeaderLogin'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LoginScreen() {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)

  if (localStorage.getItem('token')) {
    window.location.href = '/'
  }

  // function login
  const loginForm = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)

    try {
      const fetchLogin = await fetch(`${API_URL}api/login`, {
        method: 'POST',
        body: formData,
      })
      const datalogin = await fetchLogin.json()
      console.log(datalogin)
      if (datalogin.success) {
        localStorage.setItem('username', datalogin.result.username)
        localStorage.setItem('role', datalogin.result.role)
        localStorage.setItem('token', datalogin.result.token)
        localStorage.setItem('iduser', datalogin.result.iduser)
        MySwal.fire({
          title: 'Loading...',
          timer: 1000,
          didOpen: () => {
            MySwal.showLoading()
          },
        }).then(() => {
          window.location.href = '/'
        })
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'There is an error!',
          text: 'Email or password is not correct!',
        })
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <>
      <HeaderLogin />
      <div
        className="card login-card"
        style={{
          marginTop: '7%',
          marginBottom: '5%',
          backgroundColor: 'white',
          border: 0,
        }}
      >
        <div className="card-body shadow-lg" style={{ borderRadius: 5 }}>
          <h3 className="text-center text-black mb-4">LOG IN</h3>
          <form onSubmit={(e) => loginForm(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                style={{ borderRadius: 5 }}
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                style={{ borderRadius: 5 }}
                name="password"
              />
            </div>
            <input
              type="submit"
              className="btn btn-block mb-3"
              style={{ backgroundColor: '#5EBAF0', color: 'white' }}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
