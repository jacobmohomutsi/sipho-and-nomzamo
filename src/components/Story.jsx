// src/components/Story.jsx
const Story = () => (
    <section id="story" className="text-center p-5">
      <h2 className="mb-4">Discover Our Journey</h2>
      <div className="row g-md-5 g-3">
          <div className="col-md-3">
            <div className="card m-0 border-0">
              <div className="ratio ratio-1x1">
                <img
                  src="/story/1.jpeg"
                  className="card-img-top"
                  alt="Our Story"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card m-0 border-0">
              <div className="ratio ratio-1x1">
                <img
                  src="/story/2.jpeg"
                  className="card-img-top"
                  alt="Our Story"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card m-0 border-0">
              <div className="ratio ratio-1x1">
                <img
                  src="/story/3.jpeg"
                  className="card-img-top"
                  alt="Our Story"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="ratio ratio-1x1">
                <img
                  src="/story/4.jpeg"
                  className="card-img-top"
                  alt="Our Story"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
  
  export default Story