import { useState } from "react";
import "./piste.css";
import piste1 from "../assets/piste.png";
import piste2 from "../assets/KartingMontrealPiste2.png";
import piste3 from "../assets/KartingMontrealPiste3.png";
import piste4 from "../assets/piste4.png";

export default function Piste() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { img: piste1, caption: "Circuit de départ" },
    { img: piste2, caption: "Section technique" },
    { img: piste3, caption: "Grande ligne droite" },
    { img: piste4, caption: "Vue de haut" },
  ];

  const changeSlide = (direction) => {
    setSlideIndex((prev) =>
      (prev + direction + slides.length) % slides.length
    );
  };

  const setSlide = (index) => setSlideIndex(index);

  return (
    <>
      <h1>Grand Prix de Montreal</h1>

      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === slideIndex ? "activeSlide" : ""}`}
          >
            <div className="numbertext">
              {index + 1} / {slides.length}
            </div>
            <img src={slide.img} style={{ width: "100%" }} alt={slide.caption} />
            <div className="text">{slide.caption}</div>
          </div>
        ))}

        <button className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>

      <br />
      <div style={{ textAlign: "center" }}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === slideIndex ? "active" : ""}`}
            onClick={() => setSlide(i)}
          ></span>
        ))}
      </div>
    </>
  );
}
