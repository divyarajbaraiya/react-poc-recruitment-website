import { FC, useContext } from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header className="header-container">
      <div className="header-container--logo">
        <div className="main-logo" />
        <span className="title-logo">CANDIDATES</span>
        <span className="title-logo active-link pl-1">BAZAAR</span>
      </div>

      <div className="header-container--action">
        <div className="header-logout">
          <div className="logout-icon" onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
};
