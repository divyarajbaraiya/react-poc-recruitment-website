import { FC } from "react";

import "./assets/style.scss";

import { AppProgressBar } from "../AppProgressBar";

interface AppApplicantCardProps {
  isCandidate?: boolean;
}

export const AppApplicantCard: FC<AppApplicantCardProps> = ({
  isCandidate = false,
}) => {
  return (
    <div
      className={`card-container ${
        isCandidate ? "candidate-card" : "applicant-card"
      }`}
    >
      <div className="card-container--info">
        <div className="profile-icon"></div>
        <div className="profile-content">
          <span className="name">Avinash kumar Jha</span>
          <span className="tech">PHP Developer</span>
          <span className="status">Open to work</span>
        </div>
      </div>

      <div className="card-container--skill-progress">
        <div className="skill-content mt-3">
          <span className="label">Skills Matched</span>
          <span className="percentage">75%</span>
        </div>

        <div className="slider mt-4">
          <AppProgressBar percentage={75} />
        </div>
      </div>

      <div className="card-container--additional mt-5">
        <div className="info-content">
          <div className="d-flex flex-column first">
            <span className="label">Relevant Experience:</span>
            <span className="desc">3 years</span>
          </div>
          <div className="d-flex flex-column">
            <span className="label">Location:</span>
            <span className="desc">Pune</span>
          </div>
        </div>

        <div className="info-content mt-3">
          <div className="d-flex flex-column first">
            <span className="label">Current CTC:</span>
            <span className="desc">₹ 60,000</span>
          </div>
          <div className="d-flex flex-column">
            <span className="label">Notice period:</span>
            <span className="desc">30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};
