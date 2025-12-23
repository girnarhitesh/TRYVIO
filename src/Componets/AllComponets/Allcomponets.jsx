import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import CardSection from "./CardSection/CardSection";
import  SliderSection from "./SliderSection/SliderSection";



const AllComponents = ({ favoritesCtx, i18nCtx }) => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <CardSection />
            <SliderSection favoritesCtx={favoritesCtx} i18nCtx={i18nCtx} />                   
        </>
    );
}

export default AllComponents;
