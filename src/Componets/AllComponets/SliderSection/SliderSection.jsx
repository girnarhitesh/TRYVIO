import React, { useState } from "react";
import "./SliderSection.css";
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const SliderSection = ({ favoritesCtx, i18nCtx }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const isFavorited = (item) => favoritesCtx?.favorites?.some((f) => f.title === item.title);
    const toggleFavorite = (item) => favoritesCtx?.toggleFavorite?.(item);

    const items = [
        {
            src: "https://i.pinimg.com/736x/b8/a7/d6/b8a7d614d54ae74597cb3fcd922353ea.jpg",
            alt: "City Lights",
            title: "City Light Jacket",
            price: "₹3,499",
            link: "/product/city-light-jacket",
        },
        {
            src: "https://i.pinimg.com/736x/96/58/e9/9658e9925bb105cc8c49140fbb436317.jpg",
            alt: "Fashion Walk",
            title: "Runway Tee",
            price: "₹1,299",
            link: "/product/runway-tee",
        },
        {
            src: "https://i.pinimg.com/1200x/70/6a/71/706a712faca127daa85f2163a16948a2.jpg",
            alt: "Studio Mood",
            title: "Studio Hoodie",
            price: "₹2,799",
            link: "/product/studio-hoodie",
        },
        {
            src: "https://i.pinimg.com/1200x/84/c8/7e/84c87ec933e32a8a79037770fc921b56.jpg",
            alt: "Backdrop Composition",
            title: "Backdrop Shirt",
            price: "₹1,899",
            link: "/product/backdrop-shirt",
        },
        {
            src: "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg",
            alt: "Monochrome Texture",
            title: "Mono Texture Bomber",
            price: "₹4,199",
            link: "/product/mono-texture-bomber",
        },
    ];
    return (
        <>
            <div className="Sectionpadding">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={16}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        600: { slidesPerView: 2, spaceBetween: 12 },
                        900: { slidesPerView: 3, spaceBetween: 16 },
                        1200: { slidesPerView: 4, spaceBetween: 18 },
                        1600: { slidesPerView: 5, spaceBetween: 20 }
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {items.map((item, idx) => (
                        <SwiperSlide key={item.title}>
                            <div className="slide-card">
                                <button
                                    type="button"
                                    className={`heart-btn ${isFavorited(item) ? 'active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }}
                                    aria-pressed={isFavorited(item)}
                                    aria-label="Add to favorites"
                                >
                                    <FaHeart />
                                </button>
                                <div className="slide-media-box">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="slide-media"
                                        onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                                    />
                                </div>
                                <div className={`slide-overlay ${expandedIndex === idx ? 'show' : ''}`}>
                                    <div className="slide-meta">
                                        <h3 className="slide-title">{item.title}</h3>
                                        <span className="slide-price">{item.price}</span>
                                    </div>
                                    <div className="slide-actions">
                                        <Link to={item.link} state={item} className="slide-btn" aria-label={`View ${item.title}`}>{i18nCtx?.t('view')}</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SliderSection;
