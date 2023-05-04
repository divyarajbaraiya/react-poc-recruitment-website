import { FC } from "react";

import "./assets/style.scss";

import {
  AppCarousel,
  AppDashboardCard,
  AppSearchBox,
  AppApplicantCard,
  AppButton,
} from "../../components";
import img1 from "../../assets/image/card_1.png";
import img2 from "../../assets/image/card_2.png";
import img3 from "../../assets/image/card_3.png";
import img4 from "../../assets/image/card_4.png";
import { useNavigate } from "react-router-dom";

enum CandidateTypeEnum {
  FavoriteCandidate = "Favorite candidates",
  ShortlistedCandidate = "Shortlisted candidates",
}

export const HomePage: FC = () => {
  const navigate = useNavigate();

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

      <div className="home-container--dashboard-card">
        <AppDashboardCard label="Posted Jobs" count={14} img={img1} />
        <AppDashboardCard label="Applications" count={145} img={img2} />
        <AppDashboardCard label="Favorite Candidates" count={34} img={img3} />
        <AppDashboardCard
          label="Shortlisted Candidates"
          count={22}
          img={img4}
        />
      </div>

      <div className="home-container--applications">
        <span className="application-header">Applications</span>

        <div className="home-banner-2" />
        <div className="home-banner-2--vector" />

        <div className="application-content mt-4">
          <AppCarousel>
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
          </AppCarousel>
        </div>

        <div className="application-action mt-5">
          <AppButton
            type="button"
            variant="secondary"
            className="search-btn"
            onClick={() => navigate("/dummy")}
          >
            View All
          </AppButton>
        </div>
      </div>

      <div className="home-container--candidates">
        <div className="home-banner-3" />
        <div className="home-banner-3--vector" />

        <div className="candidate-tabs">
          <span>{CandidateTypeEnum.FavoriteCandidate}</span>
          <span className="active">
            {CandidateTypeEnum.ShortlistedCandidate}
          </span>
        </div>

        <div className="candidate-info">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </span>
        </div>

        <div className="candidates-content">
          <AppCarousel>
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
            <AppApplicantCard />
          </AppCarousel>
        </div>

        <div className="candidates-action mt-5">
          <AppButton
            type="button"
            variant="secondary"
            className="search-btn"
            onClick={() => navigate("/dummy")}
          >
            View All
          </AppButton>
        </div>
      </div>
    </div>
  );
};
