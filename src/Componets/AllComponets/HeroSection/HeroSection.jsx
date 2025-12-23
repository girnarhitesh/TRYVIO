import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
        // Content blur animation
        gsap.to(heroContentRef.current, {
            filter: "blur(10px)",
            opacity: 0,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Background image zoom animation
        gsap.to(heroImageRef.current, {
            scale: 1.3,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-bg" ref={heroImageRef}></div>
            <div className="overlay"></div>

            <div className="hero-content" ref={heroContentRef}>
                <div className="hero-left">
                    <h1>
                        Showcasing <span className="herosection-span">Creativity</span>
                        <br />
                        <span>Crafted with Excellence.</span>
                    </h1>
                </div>

                <div className="hero-right">
                    <p>
                        Welcome to Tryvio — where style meets creativity.
                        Discover our collection of premium T-shirts crafted
                        to express individuality, confidence, and everyday comfort.
                    </p>

                    <button className="hero-btn-hero">
                        Let's Talk <span><MdOutlineArrowRightAlt /></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
