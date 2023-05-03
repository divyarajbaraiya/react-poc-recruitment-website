import { FC } from "react";

import "./assets/style.scss";
import { AppSearchBox } from "../../components";

export const HomePage: FC = () => {
  return (
    <div className="home-container">
      <div className="home-container--search-bar">
        <div className="vector-1" />
        <div className="vector-2" />
        <div className="vector-3" />
        <div className="vector-4" />
        <div className="vector-5" />
        <div className="vector-6" />
        <div className="vector-7" />
        <div className="vector-8" />

        <div className="search-box">
          <div className="search-box--title">Hey!</div>
          <div className="search-box--description mt-3">
            Techno Wiz Solutions | CBE120 Welcome to Candidates Bazaar
          </div>

          <div className="search-box--form mt-2">
            <AppSearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};
