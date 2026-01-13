import React from "react";
import "./About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-left">
          <h2>About Holiday Hive</h2>
          <p>
            Holiday Hive helps buyers, renters and sellers connect with verified
            listings, transparent pricing, and local expert agents — all in one place.
          </p>

          <ul className="about-list">
            <li>Verified property listings</li>
            <li>Easy scheduling for viewings</li>
            <li>Trusted local agents</li>
            <li>Secure communication & documentation</li>
          </ul>
        </div>

        <div className="about-right">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/H1CIBqDeWQ0?si=A3IhMOvi7PXgiBf8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

