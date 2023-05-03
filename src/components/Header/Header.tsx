import { FC, useContext } from "react";

import "./assets/style.scss";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { AppHeaderLogo } from "../AppHeaderLogo";

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
      <AppHeaderLogo />

      <div className="header-container--action">
        <div className="header-logout">
          <div className="logout-icon" onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
};
