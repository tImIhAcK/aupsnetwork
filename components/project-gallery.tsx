"use client";

import Image from "next/image";
import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const ProjectsGallery = () => {
  const projects = useMemo(
    () => [
      {
        tag: "Industrial",
        title: "High-Voltage AC Contactor Installation",
        location: "Akure",
        img: "/projects/project1.jpeg",
        alt: "High-voltage AC contactor installation",
      },
      {
        tag: "Industrial",
        title: "Off-Grid Solar Power System Installation",
        location: "Ibadan",
        img: "/projects/project2.jpeg",
        alt: "Industrial off-grid solar power system installation",
      },
      {
        tag: "Residential",
        title: "Residential Hybrid Solar System (15 kWh, 8 kVA Inverter)",
        location: "Lagos",
        img: "/projects/project4.jpeg",
        alt: "Residential hybrid solar system 15 kWh with 8 kVA inverter",
      },
      {
        tag: "Security",
        title: "Solar-Powered CCTV System Installation",
        location: "Ondo",
        img: "/projects/project3.jpeg",
        alt: "Solar-powered CCTV system installation",
      },
      {
        tag: "Residential",
        title: "Residential Hybrid Solar System (30 kWh, 16 kVA Inverter)",
        location: "Akure",
        img: "/projects/project5.jpeg",
        alt: "Residential hybrid solar system 30 kWh with 16 kVA inverter",
      },
      {
        tag: "Commercial",
        title: "Studio Off-Grid Solar System (30 kWh, 16 kVA Inverter)",
        location: "Lagos",
        img: "/projects/project6.jpeg",
        alt: "Studio off-grid solar system 30 kWh with 16 kVA inverter",
      },
      {
        tag: "Commercial",
        title:
          "Luxury Hotel Off-Grid Solar Installation (80 kWh, 44 kVA Inverter)",
        location: "Akure",
        img: "/projects/project7.jpeg",
        alt: "Luxury hotel off-grid solar system 80 kWh with 44 kVA inverter",
      },
      {
        tag: "Residential",
        title: "Off-Grid Solar System (30 kWh, 20 kVA Inverter)",
        location: "Ado-Ekiti",
        img: "/projects/project8.jpeg",
        alt: "Off-grid solar system 30 kWh with 20 kVA inverter",
      },
      {
        tag: "Commercial",
        title: "Backup Solar System (45 kWh, 24 kVA Inverter)",
        location: "Akure",
        img: "/projects/project9.jpeg",
        alt: "Backup solar system 45 kWh with 24 kVA inverter",
      },
      {
        tag: "Residential",
        title: "Solar Power System (19 kWh, 8 kVA Inverter)",
        location: "Akure",
        img: "/projects/project10.jpeg",
        alt: "Solar power system 19 kWh with 8 kVA inverter",
      },
      {
        tag: "Residential",
        title: "Solar System Setup (48 V Battery Bank, 6 kVA Inverter)",
        location: "Lagos",
        img: "/projects/project11.jpeg",
        alt: "Solar system with 48 V battery bank and 6 kVA inverter",
      },
      {
        tag: "Industrial",
        title: "Electrical Distribution Board Fabrication & Installation",
        location: "Akure",
        img: "/projects/project12.jpeg",
        alt: "Electrical distribution board fabrication and installation",
      },
      {
        tag: "Access Control",
        title: "Smart Door Access Installation",
        location: "Akure",
        img: "/projects/project14.jpeg",
        alt: "Smart door access installation",
      },
      {
        tag: "Commercial",
        title: "Solar Panel Installation",
        location: "Ondo",
        img: "/projects/project13.jpeg",
        alt: "Solar panel installation",
      },
      {
        tag: "Industrial",
        title: "Changeover Switchboard Installation",
        location: "Lagos",
        img: "/projects/project15.jpeg",
        alt: "Industrial changeover switchboard installation",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ---- Lightbox controls ----
  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : current === 0 ? projects.length - 1 : current - 1
    );
  }, [projects.length]);

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % projects.length
    );
  }, [projects.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-description">
              Proven track record across diverse sectors and project scales
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p, idx) => (
              <button
                key={`${p.title}-${idx}`}
                type="button"
                className="grid-card"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Open project image: ${p.title}`}
              >
                <div className="gallery-media">
                  <Image
                    src={p.img}
                    alt={p.alt || p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="gallery-image"
                    priority={idx < 3}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-meta">
                      <div className="gallery-tag">{p.tag}</div>
                      <div className="gallery-title">{p.title}</div>
                      <div className="gallery-sub">{p.location}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Portal */}
      {activeIndex !== null && typeof window !== 'undefined' && createPortal(
        <div className="lightbox-modal" role="dialog" aria-modal="true">
          <button
            className="lightbox-backdrop"
            onClick={close}
            aria-label="Close gallery"
          />
          <div className="lightbox-panel">
            <div className="lightbox-top">
              <div className="lightbox-text">
                <div className="lightbox-tag">{projects[activeIndex].tag}</div>
                <div className="lightbox-title">
                  {projects[activeIndex].title}
                </div>
                <div className="lightbox-sub">
                  {projects[activeIndex].location}
                </div>
              </div>

              <button
                className="lightbox-close"
                onClick={close}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="lightbox-media">
              <Image
                src={projects[activeIndex].img}
                alt={projects[activeIndex].alt}
                fill
                sizes="90vw"
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-controls">
              <button
                onClick={prev}
                className="lightbox-btn"
                aria-label="Previous image"
              >
                ← Prev
              </button>
              <button
                onClick={next}
                className="lightbox-btn"
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectsGallery;