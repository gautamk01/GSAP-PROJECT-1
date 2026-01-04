import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="content-section">
      <div className="content-container">
        <h2 className="section-heading">Services</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Web Development</h3>
            <p>
              Building responsive, performant websites with modern frameworks
              and best practices.
            </p>
          </div>
          <div className="skill-item">
            <h3>UI/UX Design</h3>
            <p>
              Creating intuitive, beautiful interfaces that users love to
              interact with.
            </p>
          </div>
          <div className="skill-item">
            <h3>Animation</h3>
            <p>
              Bringing designs to life with smooth, engaging animations using
              GSAP and CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
