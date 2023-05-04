import { FC, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

import "./assets/style.scss";

interface AppCarouselProps {
  displaySlide: number;
  children: ReactNode;
}

export const AppCarousel: FC<AppCarouselProps> = ({
  children,
  displaySlide,
}) => {
  const settings: Settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: displaySlide,
    slidesToScroll: displaySlide,
    variableWidth: true,
  };

  return (
    <div className="app-carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
