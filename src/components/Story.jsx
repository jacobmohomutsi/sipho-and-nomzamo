// src/components/Story.jsx
const Story = () => (
  <section id="story" className="text-center p-5">
    <h2 className="mb-4">Discover Our Journey</h2>
    <div
      className="d-flex overflow-auto py-3"
      style={{
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((num, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-2"
          style={{
            width: '250px',
            scrollSnapAlign: 'start'
          }}
        >
          <div className="card border-0">
            <div className="ratio ratio-1x1">
              <img
                src={`/story/${num}.jpeg`}
                className="card-img-top"
                alt="Our Story"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Story;