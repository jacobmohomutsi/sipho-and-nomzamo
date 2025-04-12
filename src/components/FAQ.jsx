// src/components/FAQ.jsx
const FAQ = () => {
    const questions = [
      'What is the dress code for the wedding?',
      'What time should guests arrive at the venue?',
      'Is there parking available at the venue?',
      'Can I bring a plus one?',
      'What should I do if I have dietary restrictions?',
    ]
  
    return (
      <section className="p-md-5 p-2">
        <h2 className="text-center mb-4">FAQ</h2>
        <div className="accordion" id="faqAccordion">
          {questions.map((q, i) => (
            <div className="accordion-item" key={i}>
              <h3 className="accordion-header fw-bold special-color"> 
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                >
                  {q}
                </button>
              </h3>
              <div
                id={`collapse${i}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">We'll provide this info soon.</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default FAQ