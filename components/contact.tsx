import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Power Your Project?</h2>
            <p>
              Get a detailed consultation and project quote from our engineering
              team. We respond within 24 hours.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">Request Quote</button>
              <button className="btn-secondary">Schedule Call</button>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Submit Request
              </button>
            </form>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div className="contact-method-label">Phone</div>
                <a href="tel:+2348012345678" className="contact-method-value">
                  +234 806 761 9487
                </a>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">💬</div>
                <div className="contact-method-label">WhatsApp</div>
                <a
                  href="https://wa.me/2348067619487"
                  className="contact-method-value"
                >
                  Chat with us
                </a>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div className="contact-method-label">Email</div>
                <a
                  href="mailto:info@aupsnetwork.com"
                  className="contact-method-value"
                >
                  info@aupsnetwork.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
