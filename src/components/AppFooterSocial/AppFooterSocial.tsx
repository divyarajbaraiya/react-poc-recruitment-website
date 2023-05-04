import { FC } from "react";

import "./assets/style.scss";
import {CiFacebook} from 'react-icons/ci'
import {CiLinkedin} from 'react-icons/ci'
import {CiTwitter} from 'react-icons/ci'


export const AppFooterSocial: FC = () => {
  return (
    <div className="row foot-container">
        
        <ul className="nav justify-content-end d-flex align-item-center">
            <li className="ms-3">Follow Us</li>
            <li className="ms-3">
                <a href="#" className="text-muted"><CiFacebook className="foot-container--social-icon"/></a>
            </li>
            <li className="ms-3">
                <a href="#" className="text-muted"><CiLinkedin className="foot-container--social-icon"/></a>
            </li>
            <li className="ms-3">
                <a href="#" className="text-muted"><CiTwitter className="foot-container--social-icon"/></a>
            </li>
        </ul>
    </div>
  );
};
