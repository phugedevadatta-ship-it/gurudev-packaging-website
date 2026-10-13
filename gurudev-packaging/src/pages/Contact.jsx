
import { Link } from "react-router-dom";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const company = formData.get("company");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const requirement = formData.get("requirement");
    const quantity = formData.get("quantity");
    const message = formData.get("message");

    const subject = `Packaging Enquiry - ${name}`;

    const body = `
New Packaging Enquiry

Name: ${name}
Company: ${company || "Not provided"}
Phone: ${phone}
Email: ${email}
Packaging Requirement: ${requirement}
Estimated Quantity: ${quantity || "Not specified"}

Message:
${message || "No additional message"}
    `.trim();

    const mailtoUrl =
      `mailto:info@gurudevpackaging.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <div className="section-label">07 / CONTACT</div>

          <h1>
            Let's talk
            <br />
            <em>packaging.</em>
          </h1>

          <p>
            Have a packaging requirement? Tell us what you
            need, and let's explore the right solution for
            your business.
          </p>

          <a href="#contact-form" className="contact-hero-button">
            Send an Enquiry <span>↘</span>
          </a>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-main">
        <div className="section-label">GET IN TOUCH</div>

        <div className="contact-heading">
          <h2>
            We'd be glad
            <br />
            to <em>hear from you.</em>
          </h2>

          <p>
            Contact our team for corrugated board, packaging
            requirements and quotation enquiries.
          </p>
        </div>

        <div className="contact-info-grid">
          <article className="contact-info-card">
            <span className="contact-icon">↗</span>
            <h3>Call us</h3>

            <a href="tel:+919922914456">+91 99229 14456</a>
            <a href="tel:+919922052809">+91 99220 52809</a>
          </article>

          <article className="contact-info-card">
            <span className="contact-icon">✉</span>
            <h3>Email us</h3>

            <a href="mailto:info@gurudevpackaging.com">
              info@gurudevpackaging.com
            </a>

            <a href="mailto:gurudevpack@gmail.com">
              gurudevpack@gmail.com
            </a>
          </article>

          <article className="contact-info-card contact-address-card">
            <span className="contact-icon">⌖</span>
            <h3>Visit our factory</h3>

            <p>
              Gaikwad Vasti, Moshi, Chimbli,
              Maharashtra – 412105, India
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gaikwad+Vasti+Moshi+Chimbli+Maharashtra+412105"
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
            >
              Open in Google Maps ↗
            </a>
          </article>
        </div>
      </section>

      {/* ENQUIRY FORM + MAP */}
      <section className="contact-enquiry-section">
        <div className="contact-enquiry-grid">
          <div className="contact-form-panel" id="contact-form">
            <div className="section-label">YOUR REQUIREMENT</div>

            <h2>
              Tell us what
              <br />
              you <em>need.</em>
            </h2>

            <p className="contact-form-intro">
              Share a few details about your requirement.
              Your email application will open with the
              enquiry prepared for our team.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Your name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Company name
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  Phone number *
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </label>

                <label>
                  Email address *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  Packaging requirement *
                  <select name="requirement" required defaultValue="">
                    <option value="" disabled>
                      Select a requirement
                    </option>
                    <option value="7 Ply Corrugated Sheets">
                      7 Ply Corrugated Sheets
                    </option>
                    <option value="Corrugated Boxes">
                      Corrugated Boxes
                    </option>
                    <option value="Heavy Duty Packaging">
                      Heavy Duty Packaging
                    </option>
                    <option value="Custom Packaging">
                      Custom Packaging
                    </option>
                    <option value="Other Packaging Materials">
                      Other Packaging Materials
                    </option>
                  </select>
                </label>

                <label>
                  Estimated quantity
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 1,000 boxes"
                  />
                </label>
              </div>

              <label>
                Tell us more
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Share dimensions, specifications or other requirements..."
                />
              </label>

              <button type="submit" className="contact-submit-button">
                Prepare Email Enquiry <span>↗</span>
              </button>

              <p className="contact-form-note">
                This opens your default email application.
                Review the message and press Send to contact us.
              </p>
            </form>
          </div>

          <div className="contact-map-panel">
            <div className="contact-map-heading">
              <div>
                <div className="section-label">OUR LOCATION</div>
                <h3>Find us in Maharashtra.</h3>
              </div>
            </div>

            <div className="contact-map-frame">
              <iframe
                title="Gurudev Packaging Industries location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.361438068768!2d73.85248757527418!3d18.6926296824346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71000000001%3A0xe00199c38b605050!2sGURUDEV%20PACKAGING%20INDUSTRIUES!5e0!3m2!1sen!2sin!4v1791872885930!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="contact-map-caption">
              Please use Google Maps for directions and
              confirm the factory location before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final-cta">
        <div>
          <div className="section-label">GURUDEV PACKAGING INDUSTRIES</div>

          <h2>
            Your next project
            <br />
            starts with a <em>conversation.</em>
          </h2>
        </div>

        <Link to="/quote" className="cta-button">
          Request a Quote ↗
        </Link>
      </section>
    </main>
  );
}

export default Contact;
