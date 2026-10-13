
import { Link } from "react-router-dom";

function Quote() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const company = form.get("company");
    const phone = form.get("phone");
    const email = form.get("email");
    const packaging = form.get("packaging");
    const length = form.get("length");
    const width = form.get("width");
    const height = form.get("height");
    const unit = form.get("unit");
    const quantity = form.get("quantity");
    const ply = form.get("ply");
    const printing = form.get("printing");
    const delivery = form.get("delivery");
    const details = form.get("details");

    const subject = `Packaging Quote Request - ${name}`;

    const body = `
CUSTOM PACKAGING QUOTATION REQUEST

CUSTOMER DETAILS
Name: ${name}
Company: ${company || "Not provided"}
Phone: ${phone}
Email: ${email}

PACKAGING REQUIREMENTS
Packaging type: ${packaging}
Dimensions: ${length || "Not specified"} × ${width || "Not specified"} × ${height || "Not specified"} ${unit}
Required quantity: ${quantity}
Board preference: ${ply || "Not specified"}
Printing: ${printing || "Not specified"}
Delivery location: ${delivery || "Not specified"}

ADDITIONAL DETAILS
${details || "No additional details provided"}
    `.trim();

    window.location.href =
      `mailto:info@gurudevpackaging.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-hero-overlay"></div>

        <div className="quote-hero-content">
          <div className="section-label">08 / REQUEST A QUOTE</div>

          <h1>
            Packaging made
            <br />
            <em>for your needs.</em>
          </h1>

          <p>
            Tell us about your product, dimensions and quantity.
            We'll use your requirements to prepare a packaging
            quotation enquiry.
          </p>

          <a href="#quote-form" className="quote-hero-button">
            Configure Your Packaging ↘
          </a>
        </div>
      </section>

      <section className="quote-intro">
        <div className="section-label">CUSTOM PACKAGING</div>

        <div className="quote-intro-grid">
          <h2>
            Your product.
            <br />
            Your <em>specifications.</em>
          </h2>

          <p>
            From corrugated boxes to 7 Ply sheets, share your
            packaging requirements with Gurudev Packaging
            Industries. Complete the details you know; you can
            leave optional specifications blank.
          </p>
        </div>
      </section>

      <section className="quote-form-section" id="quote-form">
        <div className="quote-form-layout">
          <aside className="quote-form-sidebar">
            <div className="section-label">YOUR REQUIREMENT</div>

            <h2>
              Let's get
              <br />
              the details <em>right.</em>
            </h2>

            <p>
              Provide your contact details and packaging
              specifications. Our team can review the
              information in your email enquiry.
            </p>

            <div className="quote-sidebar-note">
              <span>01</span>
              <p>Tell us what you need.</p>
            </div>

            <div className="quote-sidebar-note">
              <span>02</span>
              <p>Share dimensions and quantity.</p>
            </div>

            <div className="quote-sidebar-note">
              <span>03</span>
              <p>Send your quotation request.</p>
            </div>
          </aside>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form-heading">
              <span>01 — CONTACT DETAILS</span>
              <p>Fields marked * are required.</p>
            </div>

            <div className="quote-form-row">
              <label>
                Full name *
                <input name="name" required placeholder="Your full name" />
              </label>

              <label>
                Company name
                <input name="company" placeholder="Company name" />
              </label>
            </div>

            <div className="quote-form-row">
              <label>
                Phone number *
                <input name="phone" type="tel" required placeholder="+91" />
              </label>

              <label>
                Email address *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <div className="quote-form-heading quote-spec-heading">
              <span>02 — PACKAGING SPECIFICATIONS</span>
              <p>Enter known measurements or leave them blank.</p>
            </div>

            <label>
              What do you need? *
              <select name="packaging" required defaultValue="">
                <option value="" disabled>Select packaging type</option>
                <option>Corrugated Boxes</option>
                <option>Heavy Duty Corrugated Boxes</option>
                <option>7 Ply Corrugated Sheets</option>
                <option>Printed Cartons</option>
                <option>Die Cut Boxes</option>
                <option>Custom Packaging</option>
                <option>Other Packaging Materials</option>
              </select>
            </label>

            <div className="quote-dimensions-heading">
              <span>Dimensions</span>
              <span>Length × Width × Height</span>
            </div>

            <div className="quote-dimensions">
              <label>
                Length
                <input name="length" type="number" min="0" step="any" placeholder="Length" />
              </label>

              <label>
                Width
                <input name="width" type="number" min="0" step="any" placeholder="Width" />
              </label>

              <label>
                Height
                <input name="height" type="number" min="0" step="any" placeholder="Height" />
              </label>

              <label>
                Unit
                <select name="unit" defaultValue="mm">
                  <option value="mm">mm</option>
                  <option value="cm">cm</option>
                  <option value="inches">inches</option>
                </select>
              </label>
            </div>

            <div className="quote-form-row">
              <label>
                Estimated quantity *
                <input
                  name="quantity"
                  required
                  type="number"
                  min="1"
                  placeholder="e.g. 1000"
                />
              </label>

              <label>
                Board preference
                <select name="ply" defaultValue="">
                  <option value="">Not sure yet</option>
                  <option>3 Ply</option>
                  <option>5 Ply</option>
                  <option>7 Ply / Triple Wall</option>
                  <option>Need guidance</option>
                </select>
              </label>
            </div>

            <div className="quote-form-row">
              <label>
                Printing requirement
                <select name="printing" defaultValue="">
                  <option value="">Select if applicable</option>
                  <option>No printing</option>
                  <option>Single colour</option>
                  <option>Multi-colour</option>
                  <option>Need guidance</option>
                </select>
              </label>

              <label>
                Delivery location
                <input name="delivery" placeholder="City / PIN code" />
              </label>
            </div>

            <label>
              Additional requirements
              <textarea
                name="details"
                rows="5"
                placeholder="Product details, usage, special protection, or other requirements..."
              />
            </label>

            <button type="submit" className="quote-submit-button">
              Prepare My Quote Enquiry <span>↗</span>
            </button>

            <p className="quote-form-note">
              Your email application will open with the enquiry
              details filled in. Review the message and press
              Send to contact Gurudev Packaging Industries.
            </p>
          </form>
        </div>
      </section>

      <section className="quote-final-cta">
        <div>
          <div className="section-label">GURUDEV PACKAGING INDUSTRIES</div>
          <h2>
            Need help with
            <br />
            your <em>specifications?</em>
          </h2>
        </div>

        <Link to="/contact" className="cta-button">
          Contact Our Team ↗
        </Link>
      </section>
    </main>
  );
}

export default Quote;
