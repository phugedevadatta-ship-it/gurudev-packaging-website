function WhyGurudev() {
  const features = [
    {
      number: "01",
      icon: "◇",
      title: "7 Ply / Triple Wall",
      description:
        "Heavy-duty corrugated board construction designed for demanding industrial and commercial packaging applications.",
    },
    {
      number: "02",
      icon: "□",
      title: "Custom Construction",
      description:
        "Board construction and flute combinations can be developed around product, handling and transportation requirements.",
    },
    {
      number: "03",
      icon: "+",
      title: "Application Focused",
      description:
        "Packaging solutions designed around the actual application rather than a one-size-fits-all approach.",
    },
    {
      number: "04",
      icon: "↗",
      title: "Industrial Capability",
      description:
        "Solutions developed for products that require dependable protection during handling, storage and transportation.",
    },
  ];

  return (
    <section className="why-gurudev">

      <div className="why-top">

        <div className="why-label">
          02 / WHY GURUDEV
        </div>

        <div className="why-heading-wrapper">

          <p className="why-eyebrow">
            PACKAGING ENGINEERED FOR PERFORMANCE
          </p>

          <h2>
            Built around
            <br />
            demanding
            <br />
            <em>requirements.</em>
          </h2>

        </div>

      </div>

      <div className="why-cards">

        {features.map((feature) => (
          <div className="why-card" key={feature.number}>

            <span className="why-number">
              {feature.number}
            </span>

            <div className="why-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyGurudev;