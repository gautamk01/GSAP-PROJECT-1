import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.85, 0, 0.15, 1");

export default function Hero() {
  const counterRef = useRef({ value: 0 });
  const counterProgressRef = useRef(null);

  useEffect(() => {
    // Disable scrolling during intro
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      // SplitText on BOTH headers
      const split = new SplitText(".hero-header h1", {
        type: "words",
        wordsClass: "word",
      });

      const counterT1 = gsap.timeline({ delay: 0.5 });
      const overlayTextT1 = gsap.timeline({ delay: 0.75 });
      const revealT1 = gsap.timeline({ delay: 0.5 });

      counterT1.to(counterRef.current, {
        value: 100,
        duration: 5,
        ease: "power2.out",
        onUpdate: () => {
          if (counterProgressRef.current) {
            counterProgressRef.current.textContent = Math.round(
              counterRef.current.value
            );
          }
        },
      });

      overlayTextT1
        .to(".overlay-text", {
          y: 0,
          duration: 0.75,
          ease: "hop",
        })
        .to(".overlay-text", {
          y: "-2rem",
          duration: 0.75,
          ease: "hop",
          delay: 0.75,
        })
        .to(".overlay-text", {
          y: "-4rem",
          duration: 0.75,
          ease: "hop",
          delay: 0.75,
        })
        .to(".overlay-text", {
          y: "-6rem",
          duration: 0.75,
          ease: "hop",
          delay: 1,
        });

      revealT1
        .to(".img", {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "hop",
        })
        .to(".hero-images", {
          gap: "0.75vw",
          duration: 1,
          delay: 0.5,
          ease: "hop",
        })
        .to(".img", { scale: 1, duration: 1, ease: "hop" }, "<")
        .to(
          ".hero-images",
          {
            filter:
              "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 80px rgba(41, 98, 255, 0.4))",
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        )
        .to(".img:not(.hero-img)", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          ease: "hop",
        })
        .to(".hero-img", {
          scale: 2,
          duration: 1,
          ease: "hop",
        })
        .to(
          ".hero-img",
          {
            filter: "drop-shadow(0 0 30px rgba(41, 98, 255, 0.5))",
            duration: 0.6,
            ease: "power2.out",
          },
          "<+0.4"
        )
        .to(".hero-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "hop",
        })
        .to(
          ".hero-header h1 .word",
          {
            y: "0",
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(".hero-header-outline", {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            // Re-enable scrolling after intro
            document.body.style.overflow = "auto";
          },
        });

      // Color-shifting glow
      gsap.to(".hero-img", {
        filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
        duration: 3,
        ease: "power2.inOut",
        delay: 1,
      });

      gsap.to(".hero-img", {
        filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))",
        duration: 3,
        ease: "power2.inOut",
        delay: 4,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="overlay-text-container">
          <div className="overlay-text">
            <p>Creative Designer</p>
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
            <p>Product Designer</p>
          </div>
        </div>
        <div className="counter">
          <h1 ref={counterProgressRef}>0</h1>
        </div>
      </div>

      {/* Layer 1: Solid Text (Visible during intro) */}
      <div className="hero-header hero-header-solid">
        <h1>Gautam Krishna M</h1>
      </div>

      {/* hero images will be placed */}
      <div className="hero-images">
        <div className="img">
          <img src={`${import.meta.env.BASE_URL}image/1.jpg`} alt="" />
        </div>
        <div className="img">
          <img src={`${import.meta.env.BASE_URL}image/2.jpg`} alt="" />
        </div>
        <div className="img hero-img">
          <img src={`${import.meta.env.BASE_URL}image/3.jpg`} alt="" />
        </div>
        <div className="img">
          <img src={`${import.meta.env.BASE_URL}image/4.jpg`} alt="" />
        </div>
        <div className="img">
          <img src={`${import.meta.env.BASE_URL}image/5.jpg`} alt="" />
        </div>
      </div>

      {/* Layer 2: Outline Text (Hidden, activates post-intro) */}
      <div className="hero-header hero-header-outline">
        <h1>Gautam Krishna M</h1>
      </div>
    </section>
  );
}
