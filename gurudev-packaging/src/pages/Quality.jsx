import { Link } from "react-router-dom";

function Quality() {
  const qualityChecks = [
    {
      number: "01",
      name: "Cobb",
      description:
        "Reference quality check related to water absorption of paper and corrugated board.",
    },
    {
      number: "02",
      name: "Ring Crush",
      description:
        "Reference strength check used for evaluating paper and board performance.",
    },
    {
      number: "03",
      name: "Edge Crush",
      description:
        "Reference check for edge compression performance of corrugated board.",
    },
    {
      number: "04",
      name: "Compression",
      description:
        "Reference check related to compression performance of packaging material.",
    },
    {
      number: "05",
      name: "Bursting Strength",
      description:
        "Reference check for resistance of paper and board against bursting.",
    },
    {
      number: "06",
      name: "Moisture",
      description:
        "Reference measurement related to moisture content in packaging material.",
    },
    {
      number: "07",
      name: "GSM",
      description:
        "Reference measurement used to determine material weight per square metre.",
    },
  ];

  const qualityProcess = [
    {
      number: "01",
      title: "Customer Plan",
      description:
        "Understand the required board construction and packaging requirement.",
    },
    {
      number: "02",
      title: "Material Preparation",
      description:
        "Prepare the materials and production inputs required for the planned board.",
    },
    {
      number: "03",
      title: "Controlled Production",
      description:
        "Run the corrugated board process through the planned production stages.",
    },
    {
      number: "04",
      title: "Inspection",
      description:
        "Check production output and finished sheets against the required specification.",
    },
    {
      number: "05",
      title: "Finished Goods",
      description:
        "Inspect, stock and prepare finished sheets for dispatch.",
    },
  ];

  return (
    <div className="quality-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="quality-hero">
        <div className="quality-hero-overlay"></div>

        <div className="quality-hero-content">
          <div className="section-label">
            05 / LAB TESTING
          </div>

          <h1>
            Quality built
            <br />
            <em>into every sheet.</em>
          </h1>

          <p>
            A process-oriented quality approach focused on
            consistent board construction, suitable flute
            selection and dependable packaging performance.
          </p>
        </div>
      </section>


      {/* =========================================
          QUALITY INTRO
      ========================================= */}

      <section className="quality-intro">

        <div className="section-label">
          QUALITY & PROCESS CONTROL
        </div>

        <div className="quality-intro-grid">

          <h2>
            Quality is
            <br />
            <em>part of the process.</em>
          </h2>

          <div className="quality-intro-content">

            <p>
              Gurudev Packaging Industries follows a
              process-oriented approach to quality, with
              inspection considered across material preparation,
              production and finished goods.
            </p>

            <p>
              The focus is on maintaining dependable board
              construction and ensuring that the finished
              corrugated sheets are aligned with the required
              packaging application.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          QUALITY PROCESS
      ========================================= */}

      <section className="quality-process">

        <div className="section-label">
          QUALITY PROCESS
        </div>

        <div className="quality-process-heading">

          <h2>
            From planning
            <br />
            to <em>finished goods.</em>
          </h2>

          <p>
            Quality control follows the production journey
            from understanding the customer requirement through
            material preparation, controlled production,
            inspection and finished goods.
          </p>

        </div>

        <div className="quality-process-grid">

          {qualityProcess.map((step) => (
            <article
              className="quality-process-card"
              key={step.number}
            >
              <span className="quality-process-number">
                {step.number}
              </span>

              <div className="quality-process-line"></div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}

        </div>

      </section>


      {/* =========================================
          QUALITY CHECKS
      ========================================= */}

      <section className="quality-checks">

        <div className="section-label">
          REFERENCE QUALITY CHECKS
        </div>

        <div className="quality-checks-heading">

          <h2>
            Measuring
            <br />
            <em>performance.</em>
          </h2>

          <p>
            The following quality-control categories are
            referenced for evaluating paper and corrugated
            board properties and performance.
          </p>

        </div>

        <div className="quality-checks-grid">

          {qualityChecks.map((check) => (
            <article
              className="quality-check-card"
              key={check.number}
            >
              <span>{check.number}</span>

              <h3>{check.name}</h3>

              <p>{check.description}</p>
            </article>
          ))}

        </div>

      </section>


      {/* =========================================
          QUALITY STATEMENT
      ========================================= */}

      <section className="quality-statement">

        <div className="quality-statement-content">

          <div className="section-label">
            GURUDEV PACKAGING INDUSTRIES
          </div>

          <h2>
            Consistent construction.
            <br />
            <em>Dependable performance.</em>
          </h2>

          <p>
            Our quality approach supports the production of
            strong and dependable corrugated sheets designed
            around board construction and packaging requirements.
          </p>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="quality-cta">

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

export default Quality;