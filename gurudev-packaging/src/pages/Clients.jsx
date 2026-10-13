import { Link } from "react-router-dom";

function Clients() {
  const clients = [
    { name: "Client 01", image: "client-01.png" },
    { name: "Alpha Foam", image: "alpha-foam.png" },
    { name: "Altra Industrial Motion", image: "altra-industrial-motion.png" },
    { name: "Curtiss-Wright", image: "curtiss-wright.png" },
    { name: "Helical Technology", image: "helical-technology.png" },
    { name: "IT-Tech Innovations", image: "it-tech-innovations.png" },
    { name: "Kirloskar", image: "kirloskar.png" },
    { name: "Panse", image: "panse.png" },
    { name: "Prajha Engineering", image: "prajha-engineering.png" },
    { name: "Sahyadri", image: "sahyadri.png" },
    { name: "Sigma", image: "sigma.png" },
    { name: "Sintercom", image: "sintercom.png" },
    { name: "Tata", image: "tata.png" },
    { name: "XXL", image: "xxl.png" },
  ];

  const applications = [
    {
      number: "01",
      title: "Heavy-Duty Packaging",
      description:
        "Corrugated board solutions for applications where strength and protection matter.",
    },
    {
      number: "02",
      title: "Industrial Packaging",
      description:
        "Packaging focused on product protection during handling, storage and transportation.",
    },
    {
      number: "03",
      title: "Large & Bulky Products",
      description:
        "Corrugated solutions for products requiring additional structural support.",
    },
    {
      number: "04",
      title: "Custom Packaging",
      description:
        "Board construction aligned with specific packaging requirements.",
    },
  ];

  return (
    <div className="clients-page">
      <section className="clients-hero">
        <div className="clients-hero-overlay"></div>

        <div className="clients-hero-content">
          <div className="section-label">06 / CLIENTS</div>

          <h1>
            Packaging
            <br />
            <em>partnerships.</em>
          </h1>

          <p>
            Building packaging solutions around customer
            requirements, board construction and dependable
            performance.
          </p>
        </div>
      </section>


    
      <section className="client-partnership">
        <div className="client-partnership-grid">
          <div>
            <div className="section-label">
              GURUDEV PACKAGING INDUSTRIES
            </div>

            <h2>
              More than
              <br />
              <em>just packaging.</em>
            </h2>
          </div>

          <div className="client-partnership-content">
            <p>
              Our approach begins with understanding the
              application and selecting suitable corrugated
              board construction for the packaging requirement.
            </p>

            <div className="partnership-points">
              <div className="partnership-point">
                <span>01</span>
                <p>Requirement-focused board construction</p>
              </div>

              <div className="partnership-point">
                <span>02</span>
                <p>7 Ply / Triple Wall corrugated board</p>
              </div>

              <div className="partnership-point">
                <span>03</span>
                <p>ACA, ECA, BCA and AAA flute options</p>
              </div>

              <div className="partnership-point">
                <span>04</span>
                <p>Process-oriented quality approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-partners">
        <div className="section-label">CLIENT PARTNERS</div>

        <div className="client-partners-heading">
          <h2>
            Our client
            <br />
            <em>network.</em>
          </h2>

          <p>
            A selection of company logos from the existing
            Gurudev Packaging Industries website.
          </p>
        </div>

        <div className="client-logo-grid">
          {clients.map((client) => (
            <div className="client-logo-card" key={client.image}>
              <img
                src={`/images/clients/${client.image}`}
                alt={client.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="clients-cta">
        <div>
          <p>LOOKING FOR A PACKAGING PARTNER?</p>

          <h2>
            Let's build the
            <br />
            right <em>solution.</em>
          </h2>
        </div>

        <Link to="/quote" className="cta-button">
          Request a Quote ↗
        </Link>
      </section>
    </div>
  );
}

export default Clients;