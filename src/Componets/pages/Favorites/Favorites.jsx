import React, { useMemo } from "react";
import "./Favorites.css";
import { useLocation, Link } from "react-router-dom";

const Favorites = ({ favoritesCtx, i18nCtx }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";
  const items = useMemo(() => {
    const allItems = favoritesCtx?.favorites || [];
    if (!q) return allItems;
    const s = q.toLowerCase();
    return allItems.filter((it) => (it.title || "").toLowerCase().includes(s));
  }, [favoritesCtx?.favorites, q]);
  return (
    <section className="favorites-section Sectionpadding">
      <h2 className="favorites-title">{i18nCtx?.t("favorites")}</h2>
      {items.length === 0 ? (
        <p className="favorites-empty">{i18nCtx?.t("favorites")} 0</p>
      ) : (
        <div className="favorites-grid">
          {items.map((item) => (
            <div key={item.title} className="favorites-card">
              <div className="favorites-media-wrapper">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="favorites-media"
                />
              </div>
              <div className="favorites-meta">
                <div>
                  <div className="favorites-card-title">{item.title}</div>
                  <div className="favorites-card-price">{item.price}</div>
                </div>
                <div className="favorites-actions">
                  <Link to={item.link} state={item} className="favorites-btn view-btn">
                    {i18nCtx?.t("view")}
                  </Link>
                  {/* <button
                    onClick={() => favoritesCtx.toggleFavorite(item)}
                    className="favorites-btn remove-btn"
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
