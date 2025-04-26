// src/components/FAQ.jsx
const FAQ = () => {
  const faqs = [
    {
      question: 'What is the dress code for the wedding?',
      answer: 'The dress code is elegant attire.'
    },
    {
      question: 'Are kids allowed?',
      answer: 'Unfortunately not, we are unable to accommodate children at the wedding. We hope you understand.'
    },
    {
      question: 'Is there parking available at the venue?',
      answer: 'Yes, free parking is available on-site.'
    },
    {
      question: 'Can I bring a plus one?',
      answer: 'Unfortunately not, we are unable to accommodate plus ones due to limited space. We hope you understand.'
    },
    {
      question: 'Where can buy the gifts?',
      answer: 'Anywhere you like! but we reccomend you to buy from Sheet Street and Mr Price for convinience.'
    },
  ];

  return (
    <section className="p-md-5 p-2">
      <h2 className="text-center mb-4">FAQ</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, i) => (
          <div className="accordion-item" key={i}>
            <h3 className="accordion-header fw-bold special-color">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${i}`}
              >
                {faq.question}
              </button>
            </h3>
            <div
              id={`collapse${i}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;