import { FC } from "react";
import "./assets/style.scss";
import { useNavigate } from "react-router-dom";

export const AppHeaderLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="header-logo-container" onClick={() => navigate("/")}>
      <div className="main-logo" />
      <span className="title-logo">CANDIDATES</span>
      <span className="title-logo active-link pl-1">BAZAAR</span>
    </div>
  );
};
