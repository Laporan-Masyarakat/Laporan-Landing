import React from 'react'
import HeaderLogin from '../HeaderLogin'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function RegisterScreen() {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)

  if (localStorage.getItem('token')) {
    window.location.href = '/'
  }

  // function register
  const registerForm = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)

    try {
      const fetchRegister = await fetch(`${API_URL}api/register`, {
        method: 'POST',
        body: formData,
      })
      const dataregister = await fetchRegister.json()
      console.log(dataregister)
      if (dataregister.success) {
        MySwal.fire({
          title: 'Loading...',
          text: 'Success Register',
          timer: 1500,
          didOpen: () => {
            MySwal.showLoading()
          },
        }).then(() => {
          window.location.href = '/login'
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
          <h3 className="text-center text-black mb-4">Register</h3>
          <form onSubmit={(e) => registerForm(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                style={{ borderRadius: 5 }}
                name="username"
              />
            </div>
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

export default RegisterScreen
