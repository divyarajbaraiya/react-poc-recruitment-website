import { FC } from "react";
import "./assets/style.scss";

import { AppHeaderLogo } from "../AppHeaderLogo";
import { useNavigate } from "react-router-dom";
import { AppFooterFoot } from "../AppFooterFoot";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const navigate = useNavigate();
  return <footer className="w-100 py-4">
    <div className="container py-4">
    <div className="row">
      <div className="col-4 mb-3">
      <AppHeaderLogo />
      <p className="text-justify mt-4 footer--display-text">
      CandidatesBazaar is a job portal that aims to provide a platform for employers to publish verified job openings 
      and for job seekers to find and apply for verified job opportunities. The goal of the platform is to help connect 
      employers with qualified and reliable candidates, 
      while also helping job seekers find legitimate job opportunities that align with their skills and experience
      </p>
      </div>
      <div className="col-2 mb-3 border-start">
        <h6 className="font-weight-light mb-3">Quick Links</h6>
        <ul className="nav flex-column">
        <li className="nav-item mb-2" onClick={() => navigate("/dummy")}>Post a job</li>
        <li className="nav-item mb-2">Application</li>
        <li className="nav-item mb-2">Shortlisted</li>
        <li className="nav-item mb-2">Fevorite</li>
        <li className="nav-item mb-2">Interviews</li>
        <li className="nav-item mb-2">Support</li>
        </ul>
      </div>
      <div className="col-3 mb-3 border-start ">
      <h6 className="mb-3">Contacts</h6>
      <div className="nav flex-column">
      <h6 className="font-weight-bold">Email Us</h6>
      <ul className="nav flex-column">
      <li className="nav-item mb-2">info@candidatebazare.com</li>
      <li className="nav-item mb-2">admin@candidatebazare.com</li>
      </ul> 
      </div>
      <div className="nav flex-column">
      <h6 className="font-weight-bold">Phone Number</h6>
      <ul className="nav flex-column">
      <li className="nav-item mb-2">+91 9876543210</li>
      <li className="nav-item mb-2">+91 9876543210</li>
      </ul> 
      </div>
      </div>
      <div className="col-3  mb-3  border-start">
      <h6 className="mb-3">Download App</h6>
      <div className="footer--download-app"></div>
      <h6 className="mt-3">Find Us</h6>
      <p className="text-left">
      Baârez Technology Solutions, 
      Office No 15, Second Floor,
      Building no. 226, Vasant Vihar, 
      Thane – Mumbai, India.
      </p>
      </div>
    </div>
    <AppFooterFoot/>
    </div>
   
    </footer>;
};
