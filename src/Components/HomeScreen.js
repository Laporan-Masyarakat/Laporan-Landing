import React from 'react'

function HomeScreen() {
  return (
    <>
      <section className="miri-ui-kit-section mt-5">
        <div className="container">
          <div className="d-md-flex justify-content-between row">
            <div className="feature-box px-3">
              <span className="card-icon bg-danger text-white rounded-circle">
                <i className="mdi mdi-bell" />
              </span>
              <h3 className="mb-3">Prototyping</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
            <div className="feature-box px-3">
              <span className="card-icon bg-success text-white rounded-circle">
                <i className="mdi mdi-heart-outline" />
              </span>
              <h3 className="mb-3">Branding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
            <div className="feature-box px-3">
              <span className="card-icon bg-primary text-white rounded-circle">
                <i className="mdi mdi-vibrate" />
              </span>
              <h3 className="mb-3">Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section how-we-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6 className="text-warning mb-3">HOW WE WORK</h6>
              <h2 className="h1 font-weight-semibold mb-4">
                Achieve virtually any design and layout from within the one
                template.{' '}
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                esse doloremque nostrum, fuga fugit minima quod delectus magni
                explicabo quis aliquam laborum molestiae sint voluptatum ea
                beatae sunt rerum! Saepe.
              </p>
              <p>
                <button
                  className="btn btn-rounded btn-danger raise-on-hover"
                  data-toggle="lightbox"
                  data-target="#demoVideoLightbox"
                >
                  <i className="mdi mdi-play" />
                </button>
                <span className="button-label text-danger font-weight-medium ml-3">
                  SEE HOW WE WORKS
                </span>
              </p>
            </div>
            <div className="col-md-6 d-md-flex justify-content-end">
              <div className="card bg-dark text-white count-card">
                <img
                  src="assets/images/count-card-bg.jpg"
                  alt="about 1"
                  className="card-img"
                />
                <div className="card-img-overlay">
                  <div className="count-box bg-success text">
                    <span className="h2 text-white">30K</span>
                    <span className="font-weight-medium">Download</span>
                  </div>
                  <div className="count-box bg-danger">
                    <span className="h2 text-white">3323</span>
                    <span className="font-weight-medium">Customers</span>
                  </div>
                  <div className="count-box bg-warning">
                    <span className="h2 text-white">53,981</span>
                    <span className="font-weight-medium">Revenue</span>
                  </div>
                  <div className="count-box bg-primary">
                    <span className="h2 text-white">3422</span>
                    <span className="font-weight-medium">Orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h6 className="text-warning mb-3">About us</h6>
              <h2 className="h1 font-weight-semibold mb-4">
                Meet our business partner who work behind the scene.
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                esse doloremque nostrum, fuga fugit minima quod delectus magni
                explicabo quis aliquam laborum molestiae sint voluptatum ea
                beatae sunt rerum! Saepe.
              </p>
              <p>
                <button className="btn btn-primary">Learn more</button>
              </p>
            </div>
            <div className="col-md-6 text-right">
              <img
                src="assets/images/about.png"
                alt="About"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section team-members-section">
        <div className="container">
          <h2 className="pb-2 mb-5">Team Members</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="team-card card border-0 raise-on-hover">
                <img
                  src="assets/images/team-1.jpg"
                  alt="Team 1"
                  className="card-img-top"
                />
                <div className="card-body px-0">
                  <h5 className="card-title mb-0">Afonso Pinto</h5>
                  <p className=" font-weight-medium designation">
                    Founded &amp; Chairman
                  </p>
                  <p>
                    Achieve virtually any design and layout from with in the
                  </p>
                  <p className="social-links">
                    <a href="#" className="icon-fb">
                      <i className="mdi mdi-facebook-box" />
                    </a>
                    <a href="#" className="icon-twitter">
                      <i className="mdi mdi-twitter-box" />
                    </a>
                    <a href="#" className="icon-insta">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card card border-0 raise-on-hover">
                <img
                  src="assets/images/team-2.jpg"
                  alt="Team 2"
                  className="card-img-top"
                />
                <div className="card-body px-0">
                  <h5 className="card-title mb-0">Irene Sotelo</h5>
                  <p className=" font-weight-medium designation">
                    Frontend Developer
                  </p>
                  <p>
                    Achieve virtually any design and layout from with in the
                  </p>
                  <p className="social-links">
                    <a href="#" className="icon-fb">
                      <i className="mdi mdi-facebook-box" />
                    </a>
                    <a href="#" className="icon-twitter">
                      <i className="mdi mdi-twitter-box" />
                    </a>
                    <a href="#" className="icon-insta">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card card border-0 raise-on-hover">
                <img
                  src="assets/images/team-3.jpg"
                  alt="Team 3"
                  className="card-img-top"
                />
                <div className="card-body px-0">
                  <h5 className="card-title mb-0">Marama Petera</h5>
                  <p className=" font-weight-medium designation">
                    Designer &amp; Creative Director
                  </p>
                  <p>
                    Achieve virtually any design and layout from with in the
                  </p>
                  <p className="social-links">
                    <a href="#" className="icon-fb">
                      <i className="mdi mdi-facebook-box" />
                    </a>
                    <a href="#" className="icon-twitter">
                      <i className="mdi mdi-twitter-box" />
                    </a>
                    <a href="#" className="icon-insta">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section pricing-section">
        <div className="container">
          <h2>Choose Plan</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="card-group">
            <div className="card text-center">
              <div className="card-body p-5">
                <h4>Free</h4>
                <p>Achieve virtually any design and layout from with in the</p>
                <p>
                  <button className="btn btn-primary">ChoosePlan</button>
                </p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body p-5">
                <h4>Premium</h4>
                <p>Achieve virtually any design and layout from with in the</p>
                <p>
                  <button className="btn btn-danger">ChoosePlan</button>
                </p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body p-5">
                <h4>Business</h4>
                <p>Achieve virtually any design and layout from with in the</p>
                <p>
                  <button className="btn btn-success">ChoosePlan</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="miri-ui-kit-section contact-section">
        <div className="container">
          <h2 className="text-center mb-4">Work with us</h2>
          <p className="text-center mb-4 pb-3">
            If there is something we can help you with, just let us know. We'll{' '}
            <br />
            be more than happy to offer you our help.
          </p>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form action="/" className="contact-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-pill"
                      placeholder="Default"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-pill"
                      placeholder="Email@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-pill"
                      placeholder="Contact-number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-block btn-pill btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
