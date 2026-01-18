"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Navigation scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("nav-scrolled");
        } else {
          navRef.current.classList.remove("nav-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link href="/">
              <span className="nav-logo-accent">⚡</span>
              AUPS Network
            </Link>
          </div>

          <div className="nav-links">
            <Link href="#services" className="nav-link">
              Services
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <button
              className="nav-cta"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Quote
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <Link
            href="#services"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
