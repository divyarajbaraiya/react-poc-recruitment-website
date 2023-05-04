import { FC } from "react";

import "./assets/style.scss";
import {AppFooterSocial} from '../AppFooterSocial'

export const AppFooterFoot: FC = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-item-center py-3 my-4 border-top">
        <div className="row">
            <ul className="nav justify-content-left d-flex">
                <li className="ms-3">Termes & Conditions</li>
                <li className="ms-3">Privacy</li>
                <li className="ms-3">Cookies</li>
            </ul>
        </div>
      <div className="d-flex align-items-center">
        <small className="">© 2023 Candidates Baazar.com. All Rights Reserved</small>
      </div>
        <AppFooterSocial/>
    </div>
  );
};
