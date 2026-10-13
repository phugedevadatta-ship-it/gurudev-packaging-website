import { Link } from "react-router-dom";

function Plants() {
  const machines = [
    {
      number: "01",
      name: "Stitching Machine",
      image: "/images/plant/stitching-machine.jpg",
    },
    {
      number: "02",
      name: "Shaftless Reel Stand Machine",
      image: "/images/plant/reel-stand.jpg",
    },
    {
      number: "03",
      name: "Corrugation Machine",
      image: "/images/plant/corrugation-machine.jpg",
    },
    {
      number: "04",
      name: "Sheet Cutting Machine",
      image: "/images/plant/sheet-cutting-machine.jpg",
    },
    {
      number: "05",
      name: "Pasting Machine",
      image: "/images/plant/pasting-machine.jpg",
    },
    {
      number: "06",
      name: "Punching Machine",
      image: "/images/plant/punching-machine.jpg",
    },
    {
      number: "07",
      name: "Angle Cutting Machine",
      image: "/images/plant/angle-cutting-machine.jpg",
    },
    {
      number: "08",
      name: "Rotary Cutter & Creasing Machine",
      image: "/images/plant/rotary-cutter.jpg",
    },
    {
      number: "09",
      name: "Slotting Machine",
      image: null,
    },
  ];

  return (
    <div className="plants-page">

      {/* ================= HERO ================= */}
      <section className="plants-hero">
        <div className="plants-hero-overlay"></div>

        <div className="plants-hero-content">
          <div className="section-label">
            04 / PLANTS & MACHINERY
          </div>

          <h1>
            Plants &
            <br />
            <em>machinery.</em>
          </h1>

          <p>
            A dedicated production setup supported by machinery
            and processes focused on dependable corrugated
            packaging solutions.
          </p>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="plants-intro">

        <div className="section-label">
          PLANTS AND MACHINERY
        </div>

        <div className="plants-intro-grid">

          <h2>
            Built for
            <br />
            <em>production.</em>
          </h2>

          <div className="plants-intro-content">

            <p>
              Gurudev Packaging Industries from Pune,
              Maharashtra, India has a skilled team that
              strives hard to meet and exceed the client's
              expectations, using the latest technology.
            </p>

            <p>
              Our production setup supports corrugated board
              and packaging requirements through a range of
              machinery used across different stages of
              production.
            </p>

          </div>

        </div>
      </section>


      {/* ================= MACHINERY ================= */}
      <section className="machinery-section">

        

       


        <div className="machinery-grid">

          {machines.map((machine) => (
            <article
              className={`machine-card ${
                !machine.image ? "machine-card-empty" : ""
              }`}
              key={machine.number}
            >

              <div className="machine-image">

                {machine.image ? (
                  <img
                    src={machine.image}
                    alt={machine.name}
                  />
                ) : (
                  <div className="machine-image-empty">
                    <span>IMAGE TO BE ADDED</span>
                  </div>
                )}

                <span className="machine-number">
                  {machine.number}
                </span>

              </div>

              <div className="machine-content">
                <h3>{machine.name}</h3>

                {!machine.image && (
                  <p className="machine-pending">
                    Machine image will be added later.
                  </p>
                )}
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* ================= 7 PLY PLANT ================= */}
      <section className="plant-capability">

        <div className="section-label">
          7 PLY AUTOMATIC CORRUGATED BOARD PLANT
        </div>

        <div className="plant-capability-grid">

          <div>
            <h2>
              Stronger board.
              <br />
              <em>Better protection.</em>
            </h2>
          </div>

          <div>
            <p>
              Gurudev Packaging Industries has a dedicated
              7 Ply Automatic Corrugated Board Plant focused
              on manufacturing strong and dependable
              corrugated sheets.
            </p>

            <p>
              The plant supports 7 Ply / Triple Wall
              corrugated board with multiple flute combinations
              including ACA, ECA, BCA and AAA.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PRODUCTION FLOW ================= */}
      <section className="production-section">

        <div className="section-label">
          PRODUCTION FLOW
        </div>

        <div className="production-heading">

          <h2>
            From reel
            <br />
            to <em>finished sheet.</em>
          </h2>

          <p>
            The production process follows a structured flow
            from material preparation through corrugation,
            bonding, finishing, inspection and dispatch.
          </p>

        </div>


        <div className="production-flow">

          <div className="production-step">
            <span>01</span>
            <h3>Reel Handling</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>02</span>
            <h3>Single Facers</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>03</span>
            <h3>Preheating</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>04</span>
            <h3>Pasting</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>05</span>
            <h3>Double Backing</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>06</span>
            <h3>Cutting</h3>
          </div>

          <div className="production-line"></div>

          <div className="production-step">
            <span>07</span>
            <h3>Stacking</h3>
          </div>

        </div>

      </section>


      {/* ================= FLUTE OPTIONS ================= */}
      <section className="plant-flutes">

        <div className="section-label">
          BOARD CONSTRUCTION
        </div>

        <div className="flute-heading">

          <h2>
            7 Ply data
            <br />
            <em>flute sheets.</em>
          </h2>

          <p>
            Different flute combinations can be selected
            according to the required board construction and
            packaging application.
          </p>

        </div>


        <div className="flute-grid">

          <div className="flute-card">
            <span>ACA</span>
            <h3>A + C + A</h3>
            <p>
              Strong triple-wall construction.
            </p>
          </div>

          <div className="flute-card">
            <span>ECA</span>
            <h3>E + C + A</h3>
            <p>
              Mixed-flute board construction.
            </p>
          </div>

          <div className="flute-card">
            <span>BCA</span>
            <h3>B + C + A</h3>
            <p>
              Mixed-flute construction balancing board
              performance and packaging needs.
            </p>
          </div>

          <div className="flute-card">
            <span>AAA</span>
            <h3>A + A + A</h3>
            <p>
              Higher cushioning and board build.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="plants-cta">

        <div>
          <p>HAVE A PACKAGING REQUIREMENT?</p>

          <h2>
            Let's build the
            <br />
            right <em>solution.</em>
          </h2>
        </div>

        <Link
          to="/quote"
          className="cta-button"
        >
          Request a Quote ↗
        </Link>

      </section>

    </div>
  );
}

export default Plants;