// src/components/RSVP.jsx
import { useState } from 'react'

const RSVP = () => {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Orapeleng, I am ${name} and ${attendance === 'yes' ? 'I will attend' : 'I won\'t be able to attend'}. I hope you understand. ${note ? 'Note: ' + note : ''}`
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '27637714375' // Replace with actual number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="rsvp" className="p-md-5 px-2 py-4 bg-light">
      <div className="container">
        <div className="row g-md-5 g-3">
          <div className="col-md-6">
            <img
              src="/rsvp.png"
              className="img-fluid rounded"
              alt="Couple"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>RSVP & Info</h2>
            <p><strong>When:</strong> Saturday, July 26, 2025 · 10:00 AM - 16:30 PM</p>
            <p><strong>Ceremony:</strong> UCKG, Mabopane, Unit B, 0190 <a className="fw-semibold text-alpha text-decoration-underline" href="https://maps.app.goo.gl/fHzT94oqVRLoLXwH8" target="_blank">Get Location</a></p>
            <p><strong>Reception:</strong> Mystical Woods Venue, No 100, Old Brits Road, Pretoria, 0251 <a className="fw-semibold text-alpha text-decoration-underline" href="https://maps.app.goo.gl/JmtwvdSx5RohPSwE7" target="_blank">Get Location</a></p>
            <p><strong>Dress Code:</strong> Elegant Attire</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <select
                className="form-control mb-2"
                name="attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
              >
                <option value="">Will you attend?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <textarea
                className="form-control mb-2"
                name="note"
                placeholder="Any dietary restrictions?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-dark btn-lg rounded-pill mt-4">Submit RSVP</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP