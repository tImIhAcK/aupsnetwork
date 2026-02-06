"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsGallery from "@/components/project-gallery";
import TrustSection from "@/components/trust-section";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/contact";

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
              installation partner for Nigeria&apos;s most demanding
              infrastructure projects. Our team of certified engineers and
              technicians brings precision, safety, and reliability to every
              installation.
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
              Engineered electrical, power, and security systems for commercial,
              industrial, and infrastructure projects
            </p>
          </div>

          <div className="services-grid">
            {/* POWER & INDUSTRIAL */}
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Power & Industrial Systems</h3>
              <p className="service-description">
                Design and installation of robust electrical systems for
                industrial and large-scale commercial environments.
              </p>
              <ul className="service-features">
                <li>High & low voltage installations</li>
                <li>Power distribution & load balancing</li>
                <li>Industrial lighting systems</li>
                <li>Emergency & backup power systems</li>
              </ul>
            </div>

            {/* COMMERCIAL & INFRASTRUCTURE */}
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3 className="service-title">
                Commercial & Infrastructure Projects
              </h3>
              <p className="service-description">
                Electrical infrastructure for offices, public facilities, and
                critical infrastructure projects.
              </p>
              <ul className="service-features">
                <li>Office & commercial buildings</li>
                <li>Street lighting & public utilities</li>
                <li>Hospitals & critical facilities</li>
                <li>Transport & large public spaces</li>
              </ul>
            </div>

            {/* SOLAR & ENERGY SYSTEMS */}
            <div className="service-card">
              <div className="service-icon">☀️</div>
              <h3 className="service-title">Solar & Energy Solutions</h3>
              <p className="service-description">
                Sustainable power systems engineered for efficiency,
                reliability, and long-term performance.
              </p>
              <ul className="service-features">
                <li>Solar PV system design & installation</li>
                <li>Inverters, batteries & energy storage</li>
                <li>Hybrid solar–grid systems</li>
                <li>Energy efficiency optimization</li>
              </ul>
            </div>

            {/* SECURITY & SMART SYSTEMS */}
            <div className="service-card">
              <div className="service-icon">📹</div>
              <h3 className="service-title">Security & Smart Systems</h3>
              <p className="service-description">
                Integrated security and intelligent systems for monitoring,
                automation, and protection.
              </p>
              <ul className="service-features">
                <li>CCTV camera installation & monitoring</li>
                <li>Access control & surveillance systems</li>
                <li>Smart building automation</li>
                <li>Remote monitoring & control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsGallery />

      {/* Trust Section */}
      <TrustSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <Link href="/">
                  {/* <span className="nav-logo-accent">⚡</span>
              AUPS Network */}
                  <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
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
                  <a href="tel:+2348067619487">+234 806 761 9487</a>
                </li>
                <li>
                  <a href="mailto:info@aupsnetwork.com">info@aupsnetwork.com</a>
                </li>
                <li>Nigeria</li>
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
