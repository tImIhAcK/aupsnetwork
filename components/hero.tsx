"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

function wrapLines(el: HTMLElement) {
  const original = el.innerHTML;
  const parts = original.split(/<br\s*\/?>/i).map((p) => p.trim());

  el.innerHTML = parts
    .map(
      (line) => `
      <span class="hero-line-wrap">
        <span class="hero-line">${line}</span>
      </span>
    `,
    )
    .join("");

  return () => {
    el.innerHTML = original;
  };
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let restore: null | (() => void) = null;

    const ctx = gsap.context(() => {
      const headlineEl = headlineRef.current;
      if (!headlineEl) return;

      restore = wrapLines(headlineEl);

      const tl = gsap.timeline({ 
        defaults: { ease: "power4.out" }
      });

      // Accent gradient fade in
      tl.fromTo(
        ".hero-accent",
        { 
          opacity: 0,
          scale: 0.8,
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        },
        0
      )

      // Badge entrance with bounce
      .fromTo(
        ".hero-badge",
        { 
          opacity: 0, 
          y: -20,
          scale: 0.8,
          rotateX: -90,
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "back.out(1.4)",
        },
        0.2
      )

      // Headline lines with more dramatic stagger
      .fromTo(
        ".hero-line",
        { 
          opacity: 0, 
          y: 60,
          rotateX: 45,
          skewY: 8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          skewY: 0,
          duration: 1.2,
          stagger: 0.18,
          ease: "power4.out",
          clearProps: "all",
        },
        0.4
      )

      // Subtext with slide + blur effect
      .fromTo(
        ".hero-subtext",
        { 
          opacity: 0, 
          y: 30,
          filter: "blur(8px)",
        },
        { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        0.8
      )

      // CTA buttons with scale + rotate
      .fromTo(
        ".hero-cta-group > *",
        { 
          opacity: 0, 
          y: 20,
          scale: 0.85,
          rotateY: -15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.2)",
          clearProps: "all",
        },
        1
      )

      // Visual image with dramatic reveal
      .fromTo(
        ".hero-image-frame",
        { 
          opacity: 0, 
          x: 80,
          rotateY: 25,
          scale: 0.9,
        },
        { 
          opacity: 1, 
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        0.6
      )

      // Image itself zooms in slightly
      .fromTo(
        ".hero-image",
        { 
          scale: 1.15,
          filter: "brightness(0.7) blur(4px)",
        },
        { 
          scale: 1.02,
          filter: "brightness(1) blur(0px)",
          duration: 1.6,
          ease: "power2.out",
        },
        0.8
      )

      // Floating animation for badge after initial load
      .to(
        ".hero-badge",
        {
          y: -3,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
        2
      );

      // Subtle continuous glow pulse on accent
      gsap.to(".hero-accent", {
        opacity: 0.6,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Parallax-style hover effect on image
      const imageFrame = document.querySelector(".hero-image-frame");
      if (imageFrame) {
        imageFrame.addEventListener("mouseenter", () => {
          gsap.to(".hero-image", {
            scale: 1.08,
            duration: 0.6,
            ease: "power2.out",
          });
        });

        imageFrame.addEventListener("mouseleave", () => {
          gsap.to(".hero-image", {
            scale: 1.02,
            duration: 0.6,
            ease: "power2.out",
          });
        });
      }

      // Add subtle hover animations to CTA buttons
      const buttons = document.querySelectorAll(".hero-cta-group > a");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

    }, heroRef);

    return () => {
      restore?.();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-accent" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span>⚡</span>
            <span>Licensed & Certified</span>
          </div>

          <h1 ref={headlineRef} className="hero-headline">
            Powering Infrastructure with <br />
            <span className="hero-highlight">Precision Engineering</span>
          </h1>

          <p className="hero-subtext">
            AUPS Network delivers industrial-grade electrical installations for
            commercial, industrial, and critical infrastructure projects.
            ISO-certified excellence, proven safety standards, engineered
            reliability.
          </p>

          <div className="hero-cta-group">
            <Link href="#contact" className="btn-primary">
              Request Consultation
            </Link>
            <Link href="#projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/hero/electrical-installation.jpg"
              alt="Electrical installation work by AUPS Network"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;