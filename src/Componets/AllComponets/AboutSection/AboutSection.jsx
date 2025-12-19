import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const aboutImageRef = useRef(null);
    const [isStatic, setIsStatic] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            contentRef.current,
            { y: 120, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            aboutImageRef.current,
            { y: 100 },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        ScrollTrigger.create({
            trigger: aboutImageRef.current,
            start: "top top",
            onEnter: () => setIsStatic(true),
            onLeaveBack: () => setIsStatic(false),
        });
    }, []);

    return (
        <section className="about-pin-section" ref={sectionRef}>
            <div className={`about-content ${isStatic ? 'static' : ''}`} ref={contentRef}>
                <p>
                    Hi, I'm a digital designer at Los Widvio — I bring ideas
                    to life through bold visuals, captivating motion, and
                    effortless user experiences.
                </p>

                {/* BUTTON */}
                <Link to="/about">
                    <button className="hero-btn">
                        About us<span><MdOutlineArrowRightAlt /></span>
                    </button>
                </Link>
            </div>
            <div className="about-image" ref={aboutImageRef} />
        </section>
    );
};

export default AboutSection;
