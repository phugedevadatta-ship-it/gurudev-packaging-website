import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const productLinks = [
    {
      name: "All Products",
      link: "/products",
    },
    {
      name: "Corrugated Boxes",
      link: "/products#product-1",
    },
    {
      name: "Printed Cartons",
      link: "/products#product-2",
    },
    {
      name: "Expert Quality Boards",
      link: "/products#product-3",
    },
    {
      name: "Heavy Duty Corrugated Boxes",
      link: "/products#product-4",
    },
    {
      name: "Corrugated Cardboard Sheets",
      link: "/products#product-5",
    },
    {
      name: "Die Cut Boxes",
      link: "/products#product-6",
    },
    {
      name: "Polypropylene PP Boxes",
      link: "/products#product-7",
    },
    {
      name: "Paper Angle Boards",
      link: "/products#product-8",
    },
    {
      name: "Composite Edge Board",
      link: "/products#product-9",
    },
    {
      name: "Poly Bag",
      link: "/products#product-10",
    },
    {
      name: "Air Bubble Rolls & Bags",
      link: "/products#product-11",
    },
    {
      name: "EPE Foam",
      link: "/products#product-12",
    },
    {
      name: "PP Strapping Roll",
      link: "/products#product-13",
    },
    {
      name: "Stretch Film",
      link: "/products#product-14",
    },
    {
      name: "VCI Poly Bag",
      link: "/products#product-15",
    },
    {
      name: "Other Packaging Materials",
      link: "/products#product-16",
    },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Gurudev Packaging Industries"
            className="brand-logo"
          />
        </Link>


        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* NAVIGATION */}
        <nav
          className={`nav-links ${
            menuOpen ? "menu-open" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          <Link
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </Link>


          {/* PRODUCTS */}
          <div
            className="nav-products-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >

            <button
              className="products-button"
              onClick={() =>
                setProductsOpen(!productsOpen)
              }
            >
              Products
              <span className="dropdown-arrow">
                ⌄
              </span>
            </button>


            {productsOpen && (
              <div className="products-menu">

                <div className="products-menu-title">
                  PRODUCT RANGE
                </div>

                {productLinks.map((product) => (
                  <Link
                    key={product.name}
                    to={product.link}
                    onClick={closeMenu}
                  >
                    {product.name}
                  </Link>
                ))}

              </div>
            )}

          </div>


          <Link
            to="/plants"
            onClick={closeMenu}
          >
            Plants
          </Link>


          <Link
            to="/quality"
            onClick={closeMenu}
          >
            Lab Testing
          </Link>


          <Link
            to="/clients"
            onClick={closeMenu}
          >
            Clients
          </Link>


          <Link
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </Link>


          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>


          {/* QUOTE */}
          <Link
            to="/quote"
            className="quote-btn"
            onClick={closeMenu}
          >
            Get a Quote <span>↗</span>
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;    