import React, { useMemo, useState } from "react";
import "./Product.css";
import { useLocation, useParams } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

const slugify = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const catalog = [
  {
    src: "https://i.pinimg.com/736x/b8/a7/d6/b8a7d614d54ae74597cb3fcd922353ea.jpg",
    alt: "City Lights",
    title: "City Light Jacket",
    price: "₹3,499",
    mrp: "₹6,999",
    rating: 4.4,
    ratingCount: 121,
    material: "Cotton Linen",
    colors: [
      { name: "Toffee", code: "#7b4a2a" },
      { name: "Grey", code: "#bcc0c7" },
      { name: "Pink", code: "#d8b2b6" },
      { name: "Blue", code: "#748ab8" },
      { name: "Navy", code: "#1d2b44" },
      { name: "White", code: "#ffffff" },
      { name: "Brown", code: "#6a4a3a" },
      { name: "Black", code: "#000000" },
      { name: "Olive", code: "#7a8b6d" }
    ],
    images: [
      "https://i.pinimg.com/736x/b8/a7/d6/b8a7d614d54ae74597cb3fcd922353ea.jpg",
      "https://i.pinimg.com/736x/96/58/e9/9658e9925bb105cc8c49140fbb436317.jpg",
      "https://i.pinimg.com/1200x/84/c8/7e/84c87ec933e32a8a79037770fc921b56.jpg",
      "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg"
    ],
    offerText: "50% OFF Inclusive of all taxes",
    extraOffer: "Get it as low as ₹1275"
  },
  {
    src: "https://i.pinimg.com/736x/96/58/e9/9658e9925bb105cc8c49140fbb436317.jpg",
    alt: "Fashion Walk",
    title: "Runway Tee",
    price: "₹1,299",
    mrp: "₹2,299",
    rating: 4.2,
    ratingCount: 88,
    material: "Cotton",
    colors: [
      { name: "White", code: "#ffffff" },
      { name: "Black", code: "#000000" },
      { name: "Sky", code: "#9ec3e1" },
      { name: "Mauve", code: "#b49ab1" }
    ],
    images: [
      "https://i.pinimg.com/736x/96/58/e9/9658e9925bb105cc8c49140fbb436317.jpg",
      "https://i.pinimg.com/1200x/70/6a/71/706a712faca127daa85f2163a16948a2.jpg"
    ],
    offerText: "40% OFF Inclusive of all taxes",
    extraOffer: "Limited time extra 10% off on 2+"
  },
  {
    src: "https://i.pinimg.com/1200x/70/6a/71/706a712faca127daa85f2163a16948a2.jpg",
    alt: "Studio Mood",
    title: "Studio Hoodie",
    price: "₹2,799",
    mrp: "₹4,499",
    rating: 4.6,
    ratingCount: 64,
    material: "Fleece",
    colors: [
      { name: "Charcoal", code: "#2f2f2f" },
      { name: "Stone", code: "#bcbcbc" },
      { name: "Forest", code: "#556b2f" }
    ],
    images: [
      "https://i.pinimg.com/1200x/70/6a/71/706a712faca127daa85f2163a16948a2.jpg",
      "https://i.pinimg.com/1200x/84/c8/7e/84c87ec933e32a8a79037770fc921b56.jpg"
    ],
    offerText: "Save ₹1,700",
    extraOffer: "Free shipping on prepaid"
  },
  {
    src: "https://i.pinimg.com/1200x/84/c8/7e/84c87ec933e32a8a79037770fc921b56.jpg",
    alt: "Backdrop Composition",
    title: "Backdrop Shirt",
    price: "₹1,899",
    mrp: "₹2,999",
    rating: 4.1,
    ratingCount: 41,
    material: "Cotton",
    colors: [
      { name: "White", code: "#ffffff" },
      { name: "Khaki", code: "#bfa97a" },
      { name: "Navy", code: "#14213d" }
    ],
    images: [
      "https://i.pinimg.com/1200x/84/c8/7e/84c87ec933e32a8a79037770fc921b56.jpg",
      "https://i.pinimg.com/736x/b8/a7/d6/b8a7d614d54ae74597cb3fcd922353ea.jpg"
    ],
    offerText: "Special price inclusive of taxes",
    extraOffer: "Use code TRYVIO10 for extra 10%"
  },
  {
    src: "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg",
    alt: "Monochrome Texture",
    title: "Mono Texture Bomber",
    price: "₹4,199",
    mrp: "₹6,199",
    rating: 4.5,
    ratingCount: 23,
    material: "Poly Blend",
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Grey", code: "#808080" }
    ],
    images: [
      "https://i.pinimg.com/736x/12/36/ad/1236ad818c0561546a861e5a97dc37b1.jpg",
      "https://i.pinimg.com/1200x/70/6a/71/706a712faca127daa85f2163a16948a2.jpg"
    ],
    offerText: "Limited stock",
    extraOffer: "Flat ₹200 off on first order"
  },
].map((it) => ({ ...it, slug: slugify(it.title) }));

const Product = ({ favoritesCtx, i18nCtx }) => {
  const { slug } = useParams();
  const location = useLocation();
  const fromState = location.state && typeof location.state === "object" ? location.state : null;
  const merged = useMemo(() => {
    const base = catalog.find((it) => it.slug === slug) || null;
    if (!base && fromState) return fromState;
    if (!base) return null;
    if (!fromState) return base;
    return {
      ...base,
      ...fromState,
      images: base.images || [fromState.src],
      colors: base.colors || [],
      mrp: base.mrp || fromState.price,
      rating: base.rating || 4.3,
      ratingCount: base.ratingCount || 1,
      offerText: base.offerText || "",
      extraOffer: base.extraOffer || ""
    };
  }, [slug, fromState]);
  const product = merged;

  const isFav = favoritesCtx?.favorites?.some((f) => f.title === product.title);
  const toggleFav = () => favoritesCtx?.toggleFavorite?.(product);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(product?.colors?.[0] || null);
  const [activeSize, setActiveSize] = useState("S");
  const priceNum = Number(String(product?.price || "").replace(/[^\d]/g, ""));
  const mrpNum = Number(String(product?.mrp || "").replace(/[^\d]/g, ""));
  const discountPct = mrpNum && priceNum && mrpNum > priceNum ? Math.round(((mrpNum - priceNum) / mrpNum) * 100) : null;

  return (
    <section className="Sectionpadding product-section">
      {!product ? (
        <div className="product-container">
          <div className="product-details"><h2>Product not found</h2></div>
        </div>
      ) : (
        <div className="product-container">
          <aside className="product-aside">
            <ul className="thumb-list">
              {(product.images || [product.src]).map((url, idx) => (
                <li key={idx}>
                  <button type="button" className={`thumb ${activeIndex === idx ? "active" : ""}`} onClick={() => setActiveIndex(idx)}>
                    <img src={url} alt={product.alt} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="product-gallery">
            <div className="product-image-box">
              <img src={(product.images || [product.src])[activeIndex] || product.src} alt={product.alt} className="product-image" />
            </div>
          </div>
          <div className="product-details">
            <div className="product-brand">Bewakoof®</div>
            <h1 className="product-title">{product.title}</h1>
            <div className="price-row">
              <span className="product-price">{product.price}</span>
              {product.mrp && <span className="product-mrp">{product.mrp}</span>}
              {discountPct && <span className="product-off-pct">{discountPct}% OFF</span>}
              <span className="inclusive-tax">Inclusive of all taxes</span>
              <span className="product-rating"><FaStar color="#fdd835" /> {product.rating} | {product.ratingCount}</span>
            </div>

            <div className="purple-offer-box">
              Get it for as low as <strong>₹1275</strong> <span className="info-icon">ⓘ</span>
            </div>

            <div className="product-meta">
              <span className="product-tag">{product.material || "Cotton Linen"}</span>
            </div>

            <div className="color-section">
              <div className="section-label">Colour: <strong>{activeColor?.name || "White"}</strong></div>
              {product.colors?.length > 0 && (
                <div className="color-row">
                  {product.colors.map((c) => (
                    <button
                      key={c.name + c.code}
                      type="button"
                      className={`color-swatch ${activeColor?.name === c.name ? "active" : ""}`}
                      style={{ background: c.code }}
                      onClick={() => setActiveColor(c)}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="size-section">
              <div className="section-header">
                <span className="section-label">Select Size</span>
                <a className="size-guide" href="#">Size guide &gt;</a>
              </div>
              <div className="size-row">
                {["S", "M", "L", "XL", "2XL"].map((sz) => (
                  <div className="size-item" key={sz}>
                    <button
                      type="button"
                      className={`size-btn ${activeSize === sz ? "active" : ""}`}
                      onClick={() => setActiveSize(sz)}
                    >
                      {sz}
                    </button>
                    {sz === "M" && <span className="size-stock-alert">1 left</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="garment-note">
              <strong>Garment "(In Inches)"</strong> Chest : 41 | Front Length : 30 | Sleeve Length : 25.13
            </div>

            <div className="product-actions">
              <button className="add-to-bag-btn">
                <span className="bag-icon">🛍️</span> ADD TO CART
              </button>
              <button className={`product-fav-btn ${isFav ? "active" : ""}`} onClick={toggleFav} aria-pressed={isFav}>
                <FaHeart />
              </button>
            </div>

            <hr className="divider" />

            <div className="offers-section">
              <div className="offer-header">OFFERS</div>
              <div className="offer-item">
                <div className="offer-title">Save Extra with 2 Offers</div>
                <ul className="offer-list">
                  <li>Whistles! Get extra 10% cashback on all Prepaid orders.</li>
                  <li>Get Rs. 200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
