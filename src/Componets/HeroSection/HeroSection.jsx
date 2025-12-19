import React from "react";
import "./HeroSection.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";


const HeroSection = () => {
    return (
        <>
            <div className="hero">
                <div className="overlay"></div>
                {/* Hero Content */}
                <div className="hero-content">
                    <div className="hero-left">
                        <h1>
                            Showcasing <span className="herosection-span" >Creativity</span>  <br />
                            <span>Crafted with Excellence.</span>
                        </h1>
                    </div>

                    {/* RIGHT */}
                    <div className="hero-right">
                        <p>
                            Welcome to Tryvio — where style meets creativity.
                            Discover our collection of premium T-shirts crafted
                            to express individuality, confidence, and everyday comfort
                        </p>

                        <button className="hero-btn">
                            Let’s Talk <span><MdOutlineArrowRightAlt /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;