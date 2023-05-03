import { FC } from "react";
import "./assets/style.scss";

export const AppHeaderLogo: FC = () => {
  return (
    <div className="header-logo-container">
      <div className="main-logo" />
      <span className="title-logo">CANDIDATES</span>
      <span className="title-logo active-link pl-1">BAZAAR</span>
    </div>
  );
};
