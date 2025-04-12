// src/components/Hero.jsx
const Hero = () => (
    <div className="hero d-flex justify-content-center align-items-center">
        <div className="row g-0">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-md-5 p-3">
                    <h1>Sipho & Nomzamo Are Getting Married!</h1>
                    <p className="lead">Join us for our special day with all our favorite people.</p>
                    <div className="d-flex justify-content-md-start justify-content-center">
                    <a className="btn btn-dark btn-lg rounded-pill mt-4" href="#rsvp">RSVP</a>
                    </div>
                    <p className="mt-2 small">Please RSVP by June 1st</p>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                    src="/hero.png"
                    className="img-fluid"
                    alt="Couple"
                />
            </div>
        </div>
    </div>
  )
  
  export default Hero