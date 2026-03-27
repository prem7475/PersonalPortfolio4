import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFX() {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Prevent duplicate triggers across route transitions.
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const hero = document.getElementById("top");
    if (hero) {
      const layers = hero.querySelectorAll("[data-parallax]");
      layers.forEach((el) => {
        const amt = Number(el.getAttribute("data-parallax")) || -18;
        gsap.to(el, {
          yPercent: amt,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const heroContent = hero.querySelector("[data-hero-content]");
      if (heroContent) {
        gsap.to(heroContent, {
          y: -50,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }

    const journey = document.getElementById("journey");
    if (journey) {
      const progress = journey.querySelector("[data-timeline-progress]");
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: journey,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          },
        );
      }
    }

    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
}
