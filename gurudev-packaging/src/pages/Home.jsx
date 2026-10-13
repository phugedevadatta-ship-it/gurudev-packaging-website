import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";


function Home() {
  return (
    <div className="home">

       {/* HERO SLIDER */}

      <HeroSlider />

      {/* ABOUT GURUDEV */}

      

   

<section className="about-preview">

  <div className="section-label">
    01 / ABOUT GURUDEV
  </div>

  <div className="about-grid">

    <div className="about-image">

      <img
        src="/images/about-packaging.jpg"
        alt="Gurudev Packaging Industries"
      />

      <div className="about-badge">
        <strong>7 PLY</strong>
        <span>TRIPLE WALL</span>
      </div>

    </div>

    <div className="about-content">

      <p className="about-eyebrow">
        GURUDEV PACKAGING INDUSTRIES
      </p>

      <h2>
        Packaging designed
        <br />
        around your
        <br />
        <em>requirements.</em>
      </h2>

      <p>
        Gurudev Packaging Industries delivers high-performance 7 Ply and Triple Wall corrugated packaging solutions tailored to demanding applications.
      </p>

      <p>
        From board construction and flute selection to protection and handling, we engineer packaging that performs throughout the supply chain.
      </p>

      <Link to="/about" className="about-link">
        Discover Gurudev →
      </Link>

    </div>

  </div>

</section>


      {/* CAPABILITY PREVIEW */}

     {/* WHY GURUDEV */}

<section className="why-gurudev">

  <div className="why-top">

    <div className="why-label">
      02 / WHY GURUDEV
    </div>

    <div className="why-heading">

      <p>
        PACKAGING ENGINEERED FOR PERFORMANCE
      </p>

      <h2>
        SMART PACKAGING.
        <br />
        STRONGER PROTECTION.
        <br />
        <em>BETTER PERFORMANCE.</em>
      </h2>

    </div>

  </div>


  <div className="why-grid">

    {/* CARD 01 */}

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
        Heavy-duty corrugated board
        construction designed for demanding
        industrial and commercial packaging
        applications.
      </p>

    </div>


    {/* CARD 02 */}

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
        Board construction and flute
        combinations can be developed around
        product, handling and transportation
        requirements.
      </p>

    </div>


    {/* CARD 03 */}

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


    {/* CARD 04 */}

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


      {/* CTA */}

      <section className="cta-section">

        <div>

          <p>HAVE A PACKAGING REQUIREMENT?</p>

          <h2>
            Let's build the
            <br />
            right <em>board.</em>
          </h2>

        </div>

        <Link to="/quote" className="cta-button">
          Start a Quote ↗
        </Link>

      </section>

    </div>
  );
}

export default Home;