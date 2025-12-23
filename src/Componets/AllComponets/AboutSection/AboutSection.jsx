import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);



const AboutSection = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="about-pin-section">
      {/* TEXT */}
      <div className="about-content">
        <p>
          Hi, I'm a digital designer at Los Widvio — I bring ideas to life through
          bold visuals, captivating motion, and effortless user experiences.
        </p>

        <Link to="/about">
          <button className="hero-btn">
            About us <span><MdOutlineArrowRightAlt /></span>
          </button>
        </Link>
      </div>

        <div className="about-image-wrapper">
          <div>
            <div className="about-image-1"><img src=" https://i.pinimg.com/736x/40/f9/17/40f917b0b1ddcc9488ec37cdd511fbb9.jpg" alt="" /></div>
          </div>

          <div>
            <div className="about-image-2"><img src="https://i.pinimg.com/1200x/65/f1/12/65f1129d80982f1aaa21ec9105aa191e.jpg" alt="" /></div>
          </div>

          <div>
            <div className="about-image-3"><img src="https://i.pinimg.com/1200x/d9/7e/2b/d97e2bb5be41b03fd669cab3a8ec4862.jpg" alt="" /></div>
          </div>

          <div>
            <div className="about-image-4"><img src="https://i.pinimg.com/736x/7c/0c/a0/7c0ca03996c1ca922104f3a991b20f5a.jpg" alt="" /></div>
          </div>

          <div>
            <div className="about-image-5"><img src="https://i.pinimg.com/736x/e2/43/46/e24346568752ca0bcdb9bab8aa8875e9.jpg" alt="" /></div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
