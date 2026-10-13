import { Link } from "react-router-dom";

function Products() {
 const products = [
  {
    number: "01",
    title: "Corrugated Boxes",
    description:
      "Strong and reliable corrugated boxes designed for storage, handling and transportation requirements.",
    image: "/images/products/corrugated-boxes.jpg",
  },
  {
    number: "02",
    title: "Printed Cartons",
    description:
      "Printed corrugated cartons combining product protection with presentation and branding requirements.",
    image: "/images/products/printed-cartons.jpg",
  },
  {
    number: "03",
    title: "Expert Quality Boards",
    description:
      "Quality corrugated boards designed for packaging applications where strength and consistency are important.",
    image: "/images/products/expert-quality-board.jpg",
  },
  {
    number: "04",
    title: "Heavy Duty Corrugated Boxes",
    description:
      "Heavy-duty corrugated packaging designed for demanding products and transportation conditions.",
    image: "/images/products/heavy-duty-corrugated-boxes.jpg",
  },
  {
    number: "05",
    title: "Corrugated Cardboard Sheets",
    description:
      "Corrugated sheets suitable for packaging, protection, separation and customized packaging requirements.",
    image: "/images/products/corrugated-cardboard-sheets.jpg",
  },
  {
    number: "06",
    title: "Die Cut Boxes",
    description:
      "Precisely shaped corrugated packaging solutions developed for customized product requirements.",
    image: "/images/products/die-cut-boxes.jpg",
  },
  {
    number: "07",
    title: "Polypropylene PP Boxes",
    description:
      "Durable and lightweight polypropylene packaging solutions for reusable and protective applications.",
    image: "/images/products/polypropylene-pp-boxes.jpg",
  },
  {
    number: "08",
    title: "Paper Angle Boards",
    description:
      "Paper-based edge protection solutions designed to protect corners and edges during handling and transportation.",
    image: "/images/products/paper-angle-boards.jpg",
  },
  {
    number: "09",
    title: "Composite Edge Board",
    description:
      "Protective edge board solutions designed to secure products and loads during storage and transportation.",
    image: "/images/products/composite-edge-board.jpg",
  },
  {
    number: "10",
    title: "Poly Bag",
    description:
      "Flexible poly packaging solutions for protecting products during storage, handling and transportation.",
    image: "/images/products/poly-bag.jpg",
  },
  {
    number: "11",
    title: "Air Bubble Rolls & Bags",
    description:
      "Cushioning packaging solutions designed to provide additional protection for fragile and sensitive products.",
    image: "/images/products/air-bubble-rolls-and-bags.jpg",
  },
  {
    number: "12",
    title: "EPE Foam",
    description:
      "Lightweight protective foam packaging for cushioning, separation and product protection.",
    image: "/images/products/epe-foam.jpg",
  },
  {
    number: "13",
    title: "PP Strapping Roll",
    description:
      "Strapping material used for securing boxes, packages and loads during handling and transportation.",
    image: "/images/products/pp-strapping-roll.jpg",
  },
  {
    number: "14",
    title: "Stretch Film",
    description:
      "Stretch wrapping material used to secure products and loads during storage and transportation.",
    image: "/images/products/stretch-film.jpg",
  },
  {
    number: "15",
    title: "VCI Poly Bag",
    description:
      "Protective packaging solution for applications where products require protection against corrosion.",
    image: "/images/products/vci-poly-bag.jpg",
  },
  {
    number: "16",
    title: "Other Packaging Materials",
    description:
      "Additional packaging materials and protective solutions based on specific customer requirements.",
    image: "/images/products/other-packaging-materials.jpg",
  },

  ];

  return (
    <div className="products-page">

      {/* =====================================
          PAGE HERO
      ====================================== */}

      <section className="products-hero">

        <div className="section-label">
          03 / PRODUCTS
        </div>

        <h1>
          Packaging
          <br />
          <em>solutions.</em>
        </h1>

        <p>
          Corrugated board, boxes and supporting packaging
          solutions designed around strength, protection
          and application requirements.
        </p>

      </section>


      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section className="products-intro">

        <div className="section-label">
          WHAT WE PROVIDE
        </div>

        <div className="products-intro-grid">

          <h2>
            Built for
            <br />
            <em>the requirement.</em>
          </h2>

          <p>
            Gurudev Packaging Industries offers a range of
            corrugated packaging products and supporting
            packaging materials. From corrugated boxes and
            sheets to protective packaging solutions, our
            product range is designed to support different
            handling, storage and transportation requirements.
          </p>

        </div>

      </section>


      {/* =====================================
          PRODUCT RANGE
      ====================================== */}

      <section className="products-list">

        <div className="section-label">
          16 / PRODUCT RANGE
        </div>


        <div className="product-grid">

          {products.map((product) => (

            <article
               className="product-card"
  id={`product-${parseInt(product.number)}`}
  key={product.number}
            >

              {/* PRODUCT VISUAL */}

            <div className="product-image">
  <img
    src={product.image}
    alt={product.title}
  />

  <span className="product-number">
    {product.number}
  </span>
</div>

              {/* PRODUCT INFORMATION */}

              <div className="product-content">

                <div className="product-title-row">

                  <span>
                    {product.number}
                  </span>

                  <h3>
                    {product.title}
                  </h3>

                </div>

                <p>
                  {product.description}
                </p>

                <Link to="/quote">
                  Enquire about this product →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          CTA
      ====================================== */}

      <section className="products-cta">

        <div>

          <p>
            HAVE A SPECIFIC PACKAGING REQUIREMENT?
          </p>

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

export default Products;