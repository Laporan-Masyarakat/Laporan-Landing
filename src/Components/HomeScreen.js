import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

function HomeScreen() {
  const API_URL = `http://localhost:8000/`
  const [dataprovinsi, setDataProvinsi] = useState('')
  const [idprov, setIdProv] = useState(1)
  const [datakota, setDataKota] = useState('')
  const [datainstansi, setDataInstansi] = useState('')
  const [datakategori, setDataKategori] = useState('')
  const [datalaporan, setDataLaporan] = useState('')
  const [judullaporan, setJudulLaporan] = useState('')
  const [isiLaporan, setIsiLaporan] = useState('')
  const [tglkejadian, setTglKejadian] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [lokasikejadian, setLokasiKejadian] = useState('')
  const [instansi, setInstansi] = useState('')
  const [kategori, setKategori] = useState('')
  const [fotolaporan, setFotoLaporan] = useState('')

  // fetch data Provinsi
  const fetchProvinsi = async () => {
    try {
      const data = await fetch(
        `https://dev.farizdotid.com/api/daerahindonesia/provinsi`,
        {
          method: 'GET',
        },
      )
      const result = await data.json()
      setDataProvinsi(result.provinsi)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  console.log(localStorage.getItem('token'))

  // fetch data kota
  const fetchKota = async () => {
    try {
      const data = await fetch(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idprov}`,
        {
          method: 'GET',
        },
      )
      const result = await data.json()
      setDataKota(result.kota_kabupaten)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // fetch data instansi
  const fetchInstansi = async () => {
    try {
      const data = await fetch(`${API_URL}api/getinstansi`, {
        method: 'GET',
      })
      const result = await data.json()
      setDataInstansi(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // fetch data kategori laporan
  const fetchKategori = async () => {
    try {
      const data = await fetch(`${API_URL}api/getkategori`, {
        method: 'GET',
      })
      const result = await data.json()
      setDataKategori(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // fetch data laporan
  const fetchLaporan = async () => {
    try {
      const data = await fetch(`${API_URL}api/getlaporan`, {
        method: 'GET',
      })
      const result = await data.json()
      console.log(result)
      setDataLaporan(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // submit function
  const onSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    try {
      const data = await fetch(`${API_URL}api/createlaporan`. {
        method: 'POST',
        body: formData
      })
      const create = await data.json()
      console.log(create)
      if () {
        
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  //   running the state
  useEffect(() => {
    fetchProvinsi()
      .then(() => {
        fetchKota()
      })
      .then(() => {
        fetchInstansi()
      })
      .then(() => {
        fetchKategori()
      })
      .then(() => {
        fetchLaporan()
      })
  }, [idprov])

  return (
    <>
      <section className="miri-ui-kit-section mt-5">
        <div className="container">
          <div className="d-md-flex justify-content-between row">
            <div className="feature-box px-3 text-center">
              <span className="card-icon bg-danger text-white rounded-circle">
                <i className="mdi mdi-pencil-outline" />
              </span>
              <h5 className="mb-3">Tulis Laporan</h5>
              <p>
                Laporkan keluhan atau aspirasi anda dengan jelas dan lengkap.
              </p>
            </div>
            <div className="feature-box px-3 text-center">
              <span className="card-icon bg-success text-white rounded-circle">
                <i className="mdi mdi-comment-arrow-right-outline" />
              </span>
              <h5 className="mb-3">Proses Verfikasi</h5>
              <p>
                Dalam 3 hari, laporan anda akan diverifikasi dan diteruskan
                kepada instansi berwenang.
              </p>
            </div>
            <div className="feature-box px-3 text-center">
              <span className="card-icon bg-primary text-white rounded-circle">
                <i className="mdi mdi-forum" />
              </span>
              <h5 className="mb-3">Proses Tindak Lanjut</h5>
              <p>
                Dalam 5 hari, instansi akan menindaklanjuti dan membalas laporan
                Anda.
              </p>
            </div>
            <div className="feature-box px-3 text-center">
              <span className="card-icon bg-secondary text-white rounded-circle">
                <i className="mdi mdi-check" />
              </span>
              <h5 className="mb-3">Selesai</h5>
              <p>
                Laporan Anda akan terus ditindaklanjuti hingga terselesaikan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section form-section">
        <div className="container">
          <div className="shadow-lg card" style={{ border: 0 }}>
            <div className="card-body">
              <h2
                className="text-center mb-4"
                style={{
                  backgroundColor: '#5EBAF0',
                  color: 'white',
                  height: 70,
                  paddingTop: 10,
                  borderRadius: 5,
                }}
              >
                <b>Sampaikan Laporan Anda</b>
              </h2>
              <form onSubmit={(e) => onsubmit(e)}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Judul Laporan</b>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    style={{ color: 'black', borderRadius: 10 }}
                    value={}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Isi Laporan</b>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Isi Laporan"
                    style={{ color: 'black', borderRadius: 10 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Tanggal Kejadian</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    style={{ color: 'black', borderRadius: 10 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Provinsi</b>
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style={{ color: 'black', borderRadius: 10 }}
                    value={idprov}
                    onChange={(e) => setIdProv(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    {dataprovinsi.length > 0 ? (
                      dataprovinsi.map((item) => (
                        <option value={item.id}>{item.nama}</option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Lokasi Kejadian</b>
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style={{ color: 'black', borderRadius: 10 }}
                  >
                    <option selected>Choose...</option>
                    {datakota.length > 0 ? (
                      datakota.map((item) => (
                        <option value={item.nama}>{item.nama}</option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Instansi Tujuan</b>
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style={{ color: 'black', borderRadius: 10 }}
                  >
                    <option selected>Choose...</option>
                    {datainstansi.length > 0 ? (
                      datainstansi.map((item) => (
                        <option value={item.data_instansi}>
                          {item.data_instansi}
                        </option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    <b>Kategori Laporan</b>
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style={{ color: 'black', borderRadius: 10 }}
                  >
                    <option selected>Choose...</option>
                    {datakategori.length > 0 ? (
                      datakategori.map((item) => (
                        <option value={item.id}>{item.kategori_laporan}</option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    <b>Masukkan Lampiran</b>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <button
                  className="btn"
                  style={{
                    backgroundColor: '#5EBAF0',
                    color: 'white',
                    float: 'right',
                  }}
                  type="submit"
                >
                  Laporkan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section how-much-section">
        <img src="assets/images/tengah.png" style={{ width: '100%' }} />
        <h2
          style={{
            position: 'relative',
            textAlign: 'center',
            bottom: 470,
          }}
          className="text-white"
        >
          <b>JUMLAH LAPORAN TERKUMPUL</b>
        </h2>
        <h1
          style={{ position: 'relative', textAlign: 'center', bottom: 450 }}
          className="text-white"
        >
          <CountUp end={datalaporan.length} />
        </h1>
      </section>
    </>
  )
}

export default HomeScreen
