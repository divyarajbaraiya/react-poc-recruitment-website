import { FC, useContext } from "react";
import { TbFileDollar } from "react-icons/tb";
import { BsPersonCheck } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./assets/style.scss";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { AppHeaderLogo } from "../AppHeaderLogo";
import { AppButton } from "../AppButton";

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
        <div className="header-nav">
          <BsPersonCheck />
          <span className="header-nav--title">Browse Talent</span>
        </div>

        <div className="header-nav">
          <TbFileDollar />
          <span className="header-nav--title">Pricing</span>
        </div>

        <div className="header-btn">
          <AppButton
            type="button"
            variant="secondary"
            className="post-btn"
            onClick={() => navigate("/dummy")}
          >
            Post a Job
          </AppButton>
        </div>

        <div className="header-notification-badge">
          <IoMdNotificationsOutline className="notification-icon" />
          <div className="notification-span">0</div>
        </div>

        <div className="header-logout">
          <div className="logout-icon" onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
};
