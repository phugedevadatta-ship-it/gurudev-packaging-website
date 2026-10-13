import { Link } from "react-router-dom";
import logo from "../assets/logo-2.jpg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="brand">
  <img
    src={logo}
    alt="Gurudev Packaging Industries"
    className="brand-logo"
  />
</Link>

          <p>
            7 Ply / Triple Wall corrugated board
            and packaging solutions.
          </p>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/quality">Quality</Link>

        </div>

        <div className="footer-column">

          <h4>Company</h4>

          <Link to="/process">Manufacturing Process</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/quote">Request a Quote</Link>
          <Link to="/contact">Contact Us</Link>

        </div>

        <div className="footer-column">

          <h4>Contact</h4>

          <a href="tel:+919922914456">
            +91 99229 14456
          </a>

          <a href="mailto:gurudevpack@gmail.com">
            gurudevpack@gmail.com
          </a>

          <p>
            Chimbali, Pune,
            <br />
            Maharashtra, India
          </p>

           

        </div>
 <div className="footer-column footer-map">

  <h4>Find Us</h4>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.361438068768!2d73.85248757527418!3d18.6926296824346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71000000001%3A0xe00199c38b605050!2sGURUDEV%20PACKAGING%20INDUSTRIUES!5e0!3m2!1sen!2sin!4v1788379788952!5m2!1sen!2sin"
    width="100%"
    height="180"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Gurudev Packaging Industries Location"
  />

</div>
      </div>

     

      <div className="footer-bottom">

        © {new Date().getFullYear()}
        {" "}Gurudev Packaging Industries.
        All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;