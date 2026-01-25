"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsGallery from "@/components/project-gallery";
import TrustSection from "@/components/trust-section";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {

  // Scroll-triggered animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Optional: defaults so you don’t repeat
      ScrollTrigger.defaults({ markers: false });

      // Story section reveal
      gsap.fromTo(
        ".story-content",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".story-section",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        ".story-media",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".story-section",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // Service cards stagger
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // Project items reveal
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".projects-gallery",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
            // if you NEVER want it to fade back out when scrolling up:
            // once: true,
          },
        },
      );

      // Trust section
      gsap.fromTo(
        ".trust-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".trust-section",
            start: "top 75%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // CTA section
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // Force proper measurement after everything is set up
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);


  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2>Built on Engineering Excellence</h2>
            <p>
              For over 5 years, AUPS Network has been the trusted electrical
              installation partner for Nigeria's most demanding infrastructure
              projects. Our team of certified engineers and technicians brings
              precision, safety, and reliability to every installation.
            </p>
            <p>
              From high-voltage industrial systems to complex commercial
              installations, we deliver solutions engineered to perform
              flawlessly under the most critical conditions.
            </p>

            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">70+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Safety Record</div>
              </div>
            </div>
          </div>

          <div className="story-media">
            <video
              className="story-video"
              autoPlay
              loop
              muted
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%231a2332'/%3E%3C/svg%3E"
            >
              <source src="data:video/mp4;base64," type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="section-header">
            <div className="section-label">Our Expertise</div>
            <h2 className="section-title">
              Comprehensive Electrical Solutions
            </h2>
            <p className="section-description">
              Engineered installations across commercial, industrial, and
              infrastructure sectors
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3 className="service-title">Industrial Installations</h3>
              <p className="service-description">
                High-voltage systems, power distribution, and industrial
                automation for manufacturing and processing facilities.
              </p>
              <ul className="service-features">
                <li>Three-phase power systems</li>
                <li>Motor control centers</li>
                <li>Industrial lighting</li>
                <li>Emergency backup systems</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3 className="service-title">Commercial Projects</h3>
              <p className="service-description">
                Complete electrical infrastructure for office buildings, retail
                spaces, and commercial developments.
              </p>
              <ul className="service-features">
                <li>Building management systems</li>
                <li>Data center power</li>
                <li>HVAC electrical integration</li>
                <li>Energy-efficient solutions</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Power Distribution</h3>
              <p className="service-description">
                Critical infrastructure for reliable power delivery, load
                balancing, and grid integration.
              </p>
              <ul className="service-features">
                <li>Substation installations</li>
                <li>Transformer installations</li>
                <li>Load management systems</li>
                <li>Power factor correction</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">Maintenance & Support</h3>
              <p className="service-description">
                Preventive maintenance programs and 24/7 emergency response for
                critical systems.
              </p>
              <ul className="service-features">
                <li>Scheduled inspections</li>
                <li>Thermal imaging diagnostics</li>
                <li>System upgrades</li>
                <li>Emergency repairs</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3 className="service-title">Infrastructure Projects</h3>
              <p className="service-description">
                Large-scale electrical infrastructure for public works,
                utilities, and critical facilities.
              </p>
              <ul className="service-features">
                <li>Street lighting systems</li>
                <li>Public utility installations</li>
                <li>Airport & transport facilities</li>
                <li>Hospital critical systems</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3 className="service-title">Smart Systems</h3>
              <p className="service-description">
                Advanced automation, monitoring, and control systems for modern
                electrical infrastructure.
              </p>
              <ul className="service-features">
                <li>Building automation</li>
                <li>Energy monitoring systems</li>
                <li>Remote diagnostics</li>
                <li>IoT integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsGallery />

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
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
                  +234 801 234 5678
                </a>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">💬</div>
                <div className="contact-method-label">WhatsApp</div>
                <a
                  href="https://wa.me/2348012345678"
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <span style={{ color: "var(--color-accent)" }}>⚡</span> AUPS
                Network
              </div>
              <p className="footer-description">
                Professional electrical installation services for commercial,
                industrial, and infrastructure projects across Nigeria.
              </p>
            </div>

            <div>
              <h4 className="footer-section-title">Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Industrial Installations</a>
                </li>
                <li>
                  <a href="#services">Commercial Projects</a>
                </li>
                <li>
                  <a href="#services">Power Distribution</a>
                </li>
                <li>
                  <a href="#services">Maintenance & Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-section-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-section-title">Contact</h4>
              <ul className="footer-links">
                <li>
                  <a href="tel:+2348012345678">+234 801 234 5678</a>
                </li>
                <li>
                  <a href="mailto:info@aupsnetwork.com">info@aupsnetwork.com</a>
                </li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2026 AUPS Network. All rights reserved. Licensed &
              Certified Electrical Contractors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
