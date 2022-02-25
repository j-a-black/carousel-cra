import React from "react";

const SliderContent = ({ activeIndex, sliderImages }) => {
  return (
    <section>
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.url} alt={slide.title} />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
