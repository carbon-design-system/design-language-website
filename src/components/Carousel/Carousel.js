import React, { useState, useRef } from "react";

import { Button } from "carbon-components-react";

import CaretLeft from "@carbon/icons-react/lib/CaretLeft";
import CaretRight from "@carbon/icons-react/lib/CaretRight";

import {
  carouselWrapper,
  slidesWrapper,
  slidesNavigation,
  slidesCounter,
  scrollAnchor,
} from "./Carousel.module.scss";

const Carousel = ({ children, carouselLabel, ...rest }) => {
  const carouselId = useRef(Date.now());
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesNum = React.Children.toArray(children).length - 1;
  const carouselScrollToRef = useRef(null);

  console.log(`Children List: ${React.Children.toArray(children)}`)

  const manageActiveSlide = (direction) => {
    setActiveSlideIndex((prevState) => {
      const requestedIndex = direction === "up" ? prevState + 1 : prevState - 1;
      let nextIndex = requestedIndex;

      if (direction === "up" && nextIndex > slidesNum) {
        nextIndex = prevState;
      }

      if (direction === "down" && nextIndex <= 0) {
        nextIndex = 0;
      }

      if (carouselScrollToRef.current) {
        const windowY = window.scrollY;
        const elementRect = carouselScrollToRef.current.getBoundingClientRect();
        const elementY = elementRect.top + windowY;

        if (windowY > elementY) {
          carouselScrollToRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }

      return nextIndex;
    });
  };

  return (
    <section
      id={`carousel--${carouselId.current}`}
      className={carouselWrapper}
      aria-label={carouselLabel}
      aria-roledescription="carousel"
      {...rest}
    >
      <span
        ref={carouselScrollToRef}
        className={scrollAnchor}
        aria-hidden="true"
      />
      <div className={slidesWrapper}>
        <div
          id={`carousel--${carouselId.current}-items`}
          aria-live="polite"
          style={{
            transform: `translateX(${
              (activeSlideIndex * 100 * -1) / slidesNum
            }%)`,
            width: slidesNum * 100 + `%`,
          }}
        >
          {children.map((children, index) => {
            return (
              <div
                key={`slide-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slidesNum + 1}`}
                aria-hidden={index !== activeSlideIndex}
                style={{
                  width: 100 / slidesNum + `%`,
                  flexBasis: 100 / slidesNum + `%`,
                }}
              >
                {children}
              </div>
            );
          })}
        </div>
      </div>
      <div className={slidesNavigation}>
        <Button
          hasIconOnly
          renderIcon={CaretLeft}
          iconDescription="Previous slide"
          kind="secondary"
          aria-controls={`carousel--${carouselId.current}-items`}
          disabled={activeSlideIndex === 0}
          tooltipAlignment="start"
          onClick={() => {
            manageActiveSlide("down");
          }}
        />
        <div className={slidesCounter}>
          {activeSlideIndex + 1}/{slidesNum + 1}
        </div>
        <Button
          hasIconOnly
          renderIcon={CaretRight}
          iconDescription="Next slide"
          kind="secondary"
          aria-controls={`carousel--${carouselId.current}-items`}
          disabled={activeSlideIndex === slidesNum}
          tooltipAlignment="start"
          onClick={() => {
            manageActiveSlide("up");
          }}
        />
      </div>
    </section>
  );
};

export default Carousel;
