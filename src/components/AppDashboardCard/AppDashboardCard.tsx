import { FC } from "react";

import "./assets/style.scss";

interface AppDashboardCardProps {
  img: string;
  count: number;
  label: string;
}

export const AppDashboardCard: FC<AppDashboardCardProps> = ({
  count,
  label,
  img,
}) => {
  return (
    <div className="dashboard-card-container">
      <div className="card-image">
        <img src={img} alt={label} />
      </div>

      <div className="card-content">
        <div className="card-content--header">
          <span className="count">{count}</span>
          <div className="arrow" />
        </div>

        <span className="card-content--description">{label}</span>
      </div>
    </div>
  );
};
