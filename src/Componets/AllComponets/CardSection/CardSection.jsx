import React, { useState } from "react";
import "./CardSection.css";
import SliderSection from "../SliderSection/SliderSection";

const CardSection = () => {
    const services = [
        {
            key: "mens-editorial",
            title: " Editorial",
            img: "https://i.pinimg.com/736x/3f/35/3c/3f353c38b5567d6a28592dc79efe6e1c.jpg",
            subtitle: "01",
        },
        {
            key: "mens-casual",
            title: " Casual",
            img: "https://i.pinimg.com/736x/8f/98/de/8f98de1bf41e9a26397c808cf3ce45ec.jpg",
            subtitle: "02",
        },
        {
            key: "mens-studio",
            title: " Studio",
            img: "https://i.pinimg.com/736x/60/e0/75/60e075920f86f2ef3b56c84a177a78ae.jpg",
            subtitle: "03",
        },
        {
            key: "mens-formal",
            title: "Formal",
            img: "https://i.pinimg.com/736x/7b/d2/39/7bd239a21d52404251386526461a82c0.jpg",
            subtitle: "04",
        },
    ];

    const [active, setActive] = useState(services[0]);

    return (
        <>
        <section className="card-section">
            <div className="card-header">
                <span className="let-talk">↳ Let’s Talk</span>
                <h2 className="section-title">
                    Strategic Services that help <br /> your brand stand out boldly
                </h2>
            </div>
            <div className="card-grid">
                <div className="service-list">
                    {services.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            onClick={() => setActive(item)}
                            className={`service-item ${active.key === item.key ? "active" : ""}`}
                            aria-pressed={active.key === item.key}
                        >
                            <span className="service-index">{item.subtitle}</span>
                            <span className="service-title">{item.title}</span>
                            <span className="service-arrow">→</span>
                        </button>
                    ))}
                </div>

                <div className="image-panel">
                    <img
                        key={active.key}
                        src={active.img}
                        alt={active.title}
                        className="panel-image"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
        </>
    );
}
export default CardSection;
