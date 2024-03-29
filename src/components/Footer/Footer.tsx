import { FC } from "react";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

import "./assets/style.scss";

import { AppHeaderLogo } from "../AppHeaderLogo";
import { Link, useNavigate } from "react-router-dom";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="container py-4">
        <div className="row">
          <div className="col-4 mb-3 px-3">
            <AppHeaderLogo />

            <p className="footer-container--display-text mt-4">
              CandidatesBazaar is a job portal that aims to provide a platform
              for employers to publish verified job openings and for job seekers
              to find and apply for verified job opportunities. The goal of the
              platform is to help connect employers with qualified and reliable
              candidates.
            </p>
          </div>

          <div className="col-2 mb-3 border-start border-2 px-5">
            <h6 className="mb-3 footer-title">Quick Links</h6>
            <ul className="nav flex-column">
              <li
                className="nav-item footer-desc-1 mb-2"
                onClick={() => navigate("/dummy")}
              >
                Post a job
              </li>
              <li className="nav-item footer-desc-1 mb-2">Application</li>
              <li className="nav-item footer-desc-1 mb-2">Shortlisted</li>
              <li className="nav-item footer-desc-1 mb-2">Fevorite</li>
              <li className="nav-item footer-desc-1 mb-2">Interviews</li>
              <li className="nav-item footer-desc-1 mb-2">Support</li>
            </ul>
          </div>

          <div className="col-3 mb-3 border-start border-2 px-5">
            <h6 className="mb-3 footer-desc-2">Contacts</h6>
            <div className="nav flex-column">
              <h6 className="footer-title">Email Us</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 footer-desc-1">
                  info@candidatebazare.com
                </li>
                <li className="nav-item mb-2 footer-desc-1">
                  admin@candidatebazare.com
                </li>
              </ul>
            </div>
            <div className="nav flex-column ">
              <h6 className="footer-title">Phone Number</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 footer-desc-1">+91 9876543210</li>
                <li className="nav-item mb-2 footer-desc-1">+91 9876543210</li>
              </ul>
            </div>
          </div>

          <div className="col-3  mb-3  border-start border-2 px-5">
            <h6 className="mb-3 footer-desc-2">Download App</h6>
            <div className="footer-container--download-app"></div>
            <h6 className="mt-3 footer-desc-2">Find Us</h6>
            <p className="text-left footer-desc-1">
              Baârez Technology Solutions, Office No 15, Second Floor, Building
              no. 226, Vasant Vihar, Thane – Mumbai, India.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-item-center py-3 my-4 border-top border-2">
          <div className="row">
            <ul className="nav justify-content-left d-flex">
              <li className="footer-desc-1 ms-3">Termes & Conditions</li>
              <li className="footer-desc-1 ms-3">Privacy</li>
              <li className="footer-desc-1 ms-3">Cookies</li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <span className="footer-desc-3">
              © 2023 Candidates Baazar.com. All Rights Reserved
            </span>
          </div>

          <div className="row footer-container--social-media">
            <ul className="nav justify-content-end d-flex align-item-center">
              <li className="footer-desc-1 ms-3 mt-2">Follow Us</li>
              <li className="ms-3">
                <Link to="#" className="text-muted">
                  <CiFacebook className="footer-container--social-media--social-icon" />
                </Link>
              </li>
              <li className="ms-3">
                <Link to="#" className="text-muted">
                  <CiLinkedin className="footer-container--social-media--social-icon" />
                </Link>
              </li>
              <li className="ms-3">
                <Link to="#" className="text-muted">
                  <CiTwitter className="footer-container--social-media--social-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
