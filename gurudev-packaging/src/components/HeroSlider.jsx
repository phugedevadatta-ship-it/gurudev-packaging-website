import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "7 PLY • TRIPLE WALL • CORRUGATED PACKAGING",
    title: "Packaging built",
    highlight: "for strength.",
    description:
      "High-performance corrugated board and packaging solutions designed for demanding industrial and commercial applications.",
  },
  {
    image: hero2,
    eyebrow: "ENGINEERED FOR PERFORMANCE",
    title: "Protection built",
    highlight: "for every journey.",
    description:
      "Reliable corrugated packaging solutions designed to protect products during handling, storage and transportation.",
  },
  {
    image: hero3,
    eyebrow: "GURUDEV PACKAGING INDUSTRIES",
    title: "Packaging made",
    highlight: "to perform.",
    description:
      "From corrugated boards to custom boxes, we deliver packaging solutions designed around your requirements.",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === current ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="hero-eyebrow">
              {slide.eyebrow}
            </p>

            <h1>
              {slide.title}
              <br />
              <em>{slide.highlight}</em>
            </h1>

            <p className="hero-description">
              {slide.description}
            </p>

            <div className="hero-buttons">

              <Link
                to="/quote"
                className="hero-btn primary"
              >
                Request a Quote ↗
              </Link>

              <Link
                to="/products"
                className="hero-btn secondary"
              >
                Explore Products
              </Link>

            </div>

          </div>
        </div>
      ))}

      {/* Previous */}
      <button
        className="slider-arrow slider-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Next */}
      <button
        className="slider-arrow slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default HeroSlider;