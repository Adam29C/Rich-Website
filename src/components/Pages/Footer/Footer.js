import React from "react";
import img1 from "../../../RichImages/Gambling therapy.svg";
import img2 from "../../../RichImages/begameble aware.org.svg";
import img3 from "../../../RichImages/18.svg.svg";
import logo from "../../../RichImages/Light them logo.svg";
import "../../../App.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleClickUp = () => {
    const targetElement = document.getElementById("root");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="footer-container text-center mt-3 " id="scroll-up">
        <div className="container">
          <div className="footer-btn-scroll-main"></div>
          <div className="row">
            <div className="col-md-6 footer-left-sec">
              <div className=" d-flex">
                <img
                  src={logo}
                  className="img-fluid footer-image float-left"
                  alt="#"
                />
              </div>

              <p className="footer-text f-size">
                Our website is operated by Rich143 International, a company
                established under the law of Isle of Man, with registered
                address at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man, and having
                its gaming sublicense issued by Isle of Man e-Gaming and all
                rights to operate the gaming software worldwide.
              </p>

              <p className="copyright-text f-size text-left">
                Copyright © 2024 - Rich143. All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 footer-right-sec">
              <div className="footer-right-image">
                <div className="margin-img">
                  <img
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    src={img3}
                    className="footer-img-3"
                  />
                </div>

                <p className="footer-para-test f-size">
                  Players need to be 18+ in order to register. Underage gambling
                  is prohibited.
                </p>
              </div>
              <div className="footer-img-sec">
                <img className="img1" src={img1} alt="https://khatri555.com/" />
                <img className="img2" src={img2} alt="https://khatri555.com/" />
              </div>
              <p className="footer-terms-text">
                <Link
                  className=""
                  to="/terms-conditions"
                  onClick={handleClickUp}
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
