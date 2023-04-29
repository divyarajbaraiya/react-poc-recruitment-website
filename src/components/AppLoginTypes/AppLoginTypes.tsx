import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

import "./assets/style.scss";

enum LoginTypeEnum {
  Candidate = "Candidate",
  Employer = "Employer",
}

export const AppLoginTypes = () => {
  const [loginType, setLoginType] = useState(LoginTypeEnum.Employer);

  return (
    <div className="login-type mt-4">
      <div
        className={`login-type--item w-50 ${
          loginType === LoginTypeEnum.Candidate ? "active-link" : ""
        }`}
        onClick={() => setLoginType(LoginTypeEnum.Candidate)}
      >
        <BiUserCircle />{" "}
        <span className="description-title description-title--primary">
          {LoginTypeEnum.Candidate}
        </span>
      </div>

      <div
        className={`login-type--item w-50 ${
          loginType === LoginTypeEnum.Employer ? "active-link" : ""
        }`}
        onClick={() => setLoginType(LoginTypeEnum.Employer)}
      >
        <BiUserCircle />{" "}
        <span className="description-title description-title--primary">
          {LoginTypeEnum.Employer}
        </span>
      </div>
    </div>
  );
};
