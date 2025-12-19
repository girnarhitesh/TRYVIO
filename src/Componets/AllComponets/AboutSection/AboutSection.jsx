import React, { useRef, useEffect } from "react";
import { Row, Col } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // CONTENT: center → top
            gsap.fromTo(
                contentRef.current,
                { y: 0 },
                {
                    y: -200,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // IMAGE: bottom → visible
            gsap.fromTo(
                imageRef.current,
                { y: 200, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-scroll-section" ref={sectionRef}>
            <Row align="middle">
                {/* LEFT CONTENT */}
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className="about-content" ref={contentRef}>
                        <p>
                            Hi, I'm a digital designer at Los Widvio — I bring ideas to life through bold visuals,
                             captivating motion, and effortless user experiences.
                        </p>
                    </div>
                </Col>

                {/* RIGHT IMAGE */}
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className="about-image" ref={imageRef}>
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="Tryvio" />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AboutSection;