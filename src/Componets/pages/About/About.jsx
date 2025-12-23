import React from "react";
import "./About.css";
import CardSection from "../../AllComponets/CardSection/CardSection";

const About = () => {
    return (
        <>
            <section className="about-page">
                {/* <div className="Sectionpadding"> */}
                    <div className="bg-text-year">2026</div>
                    <div className="bg-text-brand">TRYVIOFASHION</div>

                    <div className="about-container">
                        <div className="about-left-column">
                            <div className="image-stack-left">
                                <figure className="img-large-main">
                                    <img
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                                        alt="Studio Session"
                                    />
                                </figure>
                                <figure className="img-small-overlap">
                                    <img
                                        src="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=600&auto=format&fit=crop"
                                        alt="Behind scenes"
                                    />
                                </figure>
                            </div>
                            <div className="about-caption-left">
                                <p>TRYVIO brings fashion-forward style with timeless cuts and modern silhouettes—crafted for bold expression and everyday confidence.</p>
                            </div>
                        </div>

                        <div className="about-right-column">
                            <div className="about-header-section">
                                <div className="signature-area">
                                    <span className="signature">TRYVIO</span>
                                </div>
                                <div className="header-text-block">
                                    <p>From statement pieces to everyday essentials, TRYVIO designs are made to elevate your look and define your fashion story.</p>
                                    {/* <a href="#readmore" className="read-more-btn">Read more</a> */}
                                </div>
                            </div>

                            <div className="image-grid-right">
                                <figure className="img-portrait-right">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60"
                                        alt="Model Portrait"
                                    />
                                </figure>
                                <figure className="img-studio-right">
                                    <img
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                                        alt="Studio Backdrop"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
            <CardSection />
        </>
    );
};

export default About;
