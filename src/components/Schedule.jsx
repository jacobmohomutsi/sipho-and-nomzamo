// src/components/Schedule.jsx
const Schedule = () => {
  
    return (
      <section className="p-md-5 p-1 text-center">
        <h2 className="mb-4">Schedule</h2>
        <div className="row g-md-5 g-3">
            <div className="col-md-6">
              <div className="card h-100 p-md-5 p-3 border-0">
                <img src="/ceremony.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 p-md-5 p-3 border-0">
                <img src="/reception.png" className="img-fluid" />
              </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default Schedule