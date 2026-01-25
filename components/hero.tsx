"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const Hero = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);

  const ctaWrapRef = useRef<HTMLDivElement | null>(null);
  const ctaPrimaryRef = useRef<HTMLAnchorElement | null>(null);
  const ctaSecondaryRef = useRef<HTMLAnchorElement | null>(null);

  const accentRef = useRef<HTMLDivElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReduced) {
        gsap.set(
          [
            badgeRef.current,
            titleRef.current,
            subRef.current,
            ctaWrapRef.current,
            imageFrameRef.current,
            accentRef.current,
          ],
          { clearProps: "all", opacity: 1 }
        );
        return;
      }

      gsap.set(accentRef.current, { opacity: 0 });
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          subRef.current,
          ctaWrapRef.current,
          imageFrameRef.current,
        ],
        { opacity: 0, y: 18 }
      );
      gsap.set(imageFrameRef.current, { y: 24, scale: 0.98 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(accentRef.current, { opacity: 1, duration: 0.8 }, 0)
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.7 }, 0.18)
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.7 }, 0.28)
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.38)
        .to(ctaWrapRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .to(
          imageFrameRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          0.25
        );

      // subtle idle animation (optional, very light)
      gsap.to(imageFrameRef.current, {
        y: -4,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="hero-section relative overflow-hidden">
      {/* Accent glow */}
      <div
        ref={accentRef}
        aria-hidden="true"
        className="hero-accent pointer-events-none absolute inset-0"
      />

      <div className="hero-inner mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="hero-content">
          <div
            ref={badgeRef}
            className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <span aria-hidden>⚡</span>
            <span>Licensed &amp; Certified</span>
          </div>

          <h1 ref={titleRef} className="hero-headline mt-5 text-balance">
            <span ref={line1Ref} className="block">
              Powering Infrastructure with
            </span>
            <span ref={line2Ref} className="block hero-highlight">
              Precision Engineering
            </span>
          </h1>

          <p ref={subRef} className="hero-subtext mt-4 max-w-xl">
            AUPS Network delivers industrial-grade electrical installations for
            commercial, industrial, and critical infrastructure projects.
            Certified excellence, proven safety standards, engineered
            reliability.
          </p>

          <div ref={ctaWrapRef} className="hero-cta-group mt-7 flex gap-3">
            <Link
              ref={ctaPrimaryRef}
              href="#contact"
              className="btn-primary"
            >
              Request Consultation
            </Link>
            <Link
              ref={ctaSecondaryRef}
              href="#projects"
              className="btn-secondary"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div
            ref={imageFrameRef}
            className="hero-image-frame relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/hero/hero.png"
              alt="Electrical installation work by AUPS Network"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="hero-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
