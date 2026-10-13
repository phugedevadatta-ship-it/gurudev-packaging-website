import { Link } from "react-router-dom";
import aboutImage from "../assets/about-1.jpg";

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO / INTRO */}

      <section className="about-section">

        <div className="about-label">
          01 / ABOUT GURUDEV
        </div>

        <div className="about-grid">

          {/* IMAGE */}

          <div className="about-image-wrapper">

            <img
              src={aboutImage}
              alt="Gurudev Packaging Industries"
              className="about-image"
            />

            <div className="about-badge">
              <strong>7 PLY</strong>
              <span>TRIPLE WALL</span>
            </div>

          </div>


          {/* CONTENT */}

          <div className="about-content">

            <p className="about-eyebrow">
              GURUDEV PACKAGING INDUSTRIES
            </p>

            <h1>
              Packaging built
              <br />
              around the
              <br />
              <em>requirement.</em>
            </h1>

            <p>
              Gurudev Packaging Industries focuses on
              high-performance 7 Ply / Triple Wall
              corrugated board and custom packaging
              requirements.
            </p>

            <p>
              We combine board construction, flute
              selection and application requirements
              to develop packaging solutions suited to
              demanding products, handling and
              transportation conditions.
            </p>

            <Link to="/contact" className="about-link">
              Discover Gurudev →
            </Link>

          </div>

        </div>

      </section>

      {/* WHY GURUDEV */}

      <section className="why-gurudev">

        <div className="why-header">

          <div className="about-label">
            02 / WHY GURUDEV
          </div>

          <div className="why-heading">

            <p className="about-eyebrow">
              PACKAGING ENGINEERED FOR PERFORMANCE
            </p>

            <h2>
              Built around
              <br />
              demanding <em>requirements.</em>
            </h2>

          </div>

        </div>


        <div className="why-grid">

          {/* CARD 1 */}

          <div className="why-card">

            <span className="why-number">
              01
            </span>

            <div className="why-icon">
              ◇
            </div>

            <h3>
              7 Ply / Triple Wall
            </h3>

            <p>
              Heavy-duty corrugated board construction
              designed for demanding industrial and
              commercial packaging applications.
            </p>

          </div>


          {/* CARD 2 */}

          <div className="why-card">

            <span className="why-number">
              02
            </span>

            <div className="why-icon">
              □
            </div>

            <h3>
              Custom Construction
            </h3>

            <p>
              Board construction and flute combinations
              can be developed around product,
              handling and transportation requirements.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="why-card">

            <span className="why-number">
              03
            </span>

            <div className="why-icon">
              +
            </div>

            <h3>
              Application Focused
            </h3>

            <p>
              Packaging solutions designed around
              the actual application rather than a
              one-size-fits-all approach.
            </p>

          </div>


          {/* CARD 4 */}

          <div className="why-card">

            <span className="why-number">
              04
            </span>

            <div className="why-icon">
              ↗
            </div>

            <h3>
              Industrial Capability
            </h3>

            <p>
              Solutions developed for products that
              require dependable protection during
              handling, storage and transportation.
            </p>

          </div>

        </div>

      </section>
    </div>

    
  );
}

export default About;