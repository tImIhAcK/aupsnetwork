import React from 'react'

const TrustSection = () => {
  return (
        <section id="about" className="trust-section">
        <div className="trust-container">
          <div className="section-header">
            <div className="section-label">Why AUPS Network</div>
            <h2 className="section-title">Engineered for Excellence</h2>
            <p className="section-description">
              Certifications, standards, and values that define our commitment
            </p>
          </div>

          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">📋</div>
              <h3 className="trust-title">ISO Certified</h3>
              <p className="trust-description">
                ISO 9001:2015 quality management and ISO 45001 occupational
                health & safety standards
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🛡️</div>
              <h3 className="trust-title">Safety First</h3>
              <p className="trust-description">
                Zero-accident track record with rigorous safety protocols and
                continuous training
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">⚙️</div>
              <h3 className="trust-title">Licensed Professionals</h3>
              <p className="trust-description">
                Team of COREN-registered engineers and certified electrical
                technicians
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h3 className="trust-title">Compliance</h3>
              <p className="trust-description">
                Full adherence to NEC, IEC, and local electrical safety
                regulations
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TrustSection;