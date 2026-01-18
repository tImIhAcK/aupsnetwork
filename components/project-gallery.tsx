'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

const ProjectsGallery = () => {
  const projects = useMemo(
    () => [
      {
        tag: "Commercial",
        title: "Victoria Island Tower",
        location: "Lagos",
        img: "/projects/project2.jpg",
        alt: "Commercial electrical installation project - Victoria Island Tower",
      },
      {
        tag: "Industrial",
        title: "Manufacturing Plant Expansion",
        location: "Ikeja",
        img: "/projects/project.jpg",
        alt: "Industrial electrical installation - manufacturing plant expansion",
      },
      {
        tag: "Healthcare",
        title: "Private Hospital Complex",
        location: "Lagos",
        img: "/projects/project2.jpg",
        alt: "Healthcare facility electrical installation - private hospital complex",
      },
      {
        tag: "Retail",
        title: "Shopping Mall Development",
        location: "Lagos",
        img: "/projects/project2.jpg",
        alt: "Retail electrical installation - shopping mall development",
      },
      {
        tag: "Infrastructure",
        title: "Substation Modernization",
        location: "Lagos",
        img: "/projects/project.jpg",
        alt: "Electrical infrastructure project - substation modernization",
      },
      {
        tag: "Hospitality",
        title: "Luxury Hotel Installation",
        location: "Lagos",
        img: "/projects/project.jpg",
        alt: "Hospitality electrical installation - luxury hotel",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % projects.length));

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            Proven track record across diverse sectors and project scales
          </p>
        </div>

        <div className="projects-gallery" role="list">
          {projects.map((p, idx) => (
            <button
              key={p.title}
              type="button"
              className="gallery-item"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Open project image: ${p.title}`}
            >
              <div className="gallery-media">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-image"
                  priority={idx < 2}
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

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-backdrop" onClick={close} aria-label="Close gallery" />
          <div className="lightbox-panel">
            <div className="lightbox-top">
              <div className="lightbox-text">
                <div className="lightbox-tag">{projects[activeIndex].tag}</div>
                <div className="lightbox-title">{projects[activeIndex].title}</div>
                <div className="lightbox-sub">{projects[activeIndex].location}</div>
              </div>

              <button className="lightbox-close" onClick={close} aria-label="Close">
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
              <button onClick={prev} className="lightbox-btn" aria-label="Previous image">
                ← Prev
              </button>
              <button onClick={next} className="lightbox-btn" aria-label="Next image">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;
