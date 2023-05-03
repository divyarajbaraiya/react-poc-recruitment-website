import { FC } from "react";

import "./assets/style.scss";

interface AppProgressBarProps {
  percentage: number;
}

export const AppProgressBar: FC<AppProgressBarProps> = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-container--value" style={{ width: `${percentage}%` }}>
        <div className="handler"></div>
      </div>
    </div>
  );
};
