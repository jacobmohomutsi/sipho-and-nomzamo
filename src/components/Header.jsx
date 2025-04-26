// src/components/Header.jsx
const Header = () => (
  <nav className="navbar navbar-light bg-light justify-content-between px-4">
    <span className="navbar-brand special-font">Sipho & Nomzamo</span>
    <div>
      <a className="btn btn-link text-dark text-decoration-none text-alpha" href="#rsvp">Schedule</a>
      <a className="btn btn-link text-dark text-decoration-none text-alpha" href="#story">Our Story</a>
      <a className="btn btn-link text-dark text-decoration-none text-alpha" href="#giftRegistry">Gift Registry</a>
      <a className="btn btn-link text-dark text-decoration-none text-alpha" href="#faq">FAQ</a>
      <a className="btn btn-dark rounded-pill btn-sm text-decoration-none" href="#rsvp">RSVP</a>
    </div>
  </nav>
)

export default Header
