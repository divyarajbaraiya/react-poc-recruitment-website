import { FC, PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";

import "./assets/style.scss";

interface AppCarouselProps {}

export const AppCarousel: FC<AppCarouselProps> = ({
  children,
}: PropsWithChildren<AppCarouselProps>) => {
  const settings: Settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <div className="arrow-button arrow-button--prev" />,
    nextArrow: <div className="arrow-button arrow-button--next" />,
  };

  return (
    <div className="app-carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
