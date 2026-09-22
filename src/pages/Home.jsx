import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            ✨ NEW COLLECTION 2026
          </p>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style</span>
          </h1>

          <p className="hero-text">
            Explore the latest fashion trends,
            timeless classics and styles made
            just for you.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="shop-btn"
            >
              Shop Now →
            </Link>

            <Link
              to="/products"
              className="explore-btn"
            >
              Explore Collection
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            alt="Fashion Collection"
          />

        </div>

      </section>


      {/* CATEGORY SECTION */}

      <section className="categories">

        <div className="section-heading">

          <p>SHOP BY CATEGORY</p>

          <h2>
            Find Your Style
          </h2>

          <span>
            Explore our latest collections
          </span>

        </div>


        <div className="category-grid">

          <Link
            to="/products"
            className="category-card"
          >

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt="Women's Fashion"
            />

            <div className="category-overlay">
              <h3>Women</h3>
              <span>Shop Collection →</span>
            </div>

          </Link>


          <Link
            to="/products"
            className="category-card"
          >

            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22"
              alt="Men's Fashion"
            />

            <div className="category-overlay">
              <h3>Men</h3>
              <span>Shop Collection →</span>
            </div>

          </Link>


          <Link
            to="/products"
            className="category-card"
          >

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Footwear"
            />

            <div className="category-overlay">
              <h3>Footwear</h3>
              <span>Shop Collection →</span>
            </div>

          </Link>


          <Link
            to="/products"
            className="category-card"
          >

            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
              alt="Bags"
            />

            <div className="category-overlay">
              <h3>Bags</h3>
              <span>Shop Collection →</span>
            </div>

          </Link>

        </div>

      </section>


      {/* PROMO SECTION */}

      <section className="promo">

        <div>

          <p>LIMITED TIME OFFER</p>

          <h2>
            Upgrade Your
            <br />
            Wardrobe ✨
          </h2>

          <span>
            Discover styles you'll love
            at amazing prices.
          </span>

          <br />

          <Link
            to="/products"
            className="promo-btn"
          >
            Shop Now
          </Link>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="features">

        <div className="section-heading">

          <p>WHY SHOP WITH US</p>

          <h2>
            Fashion Made Simple
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature">

            <div className="feature-icon">
              🚚
            </div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Get your favorite fashion
              delivered quickly to your door.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              💎
            </div>

            <h3>
              Quality Products
            </h3>

            <p>
              Carefully selected products
              made for style and comfort.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              🔒
            </div>

            <h3>
              Secure Shopping
            </h3>

            <p>
              Shop confidently with a safe
              and simple experience.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>
              Loved By You
            </h3>

            <p>
              Discover styles that make
              every outfit special.
            </p>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="final-cta">

        <p>
          YOUR STYLE. YOUR STORY.
        </p>

        <h2>
          Ready to Find Your
          <br />
          New Favorite Look?
        </h2>

        <Link
          to="/products"
          className="cta-btn"
        >
          Start Shopping →
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="home-footer">

        <h2>
          Fashion Store
        </h2>

        <p>
          Style that speaks for you.
        </p>

        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

        </div>

        <p className="copyright">
          © 2026 Fashion Store. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;