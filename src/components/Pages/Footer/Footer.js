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
        <div className="footer-btn-scroll-main">
            <button
              className="footer-btn-scroll"
              onClick={handleClickUp}
              id="scroll-down-button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z" />
              </svg>
            </button>
          </div>
          <div className="row">
            <div className="col-md-6 footer-left-sec">
              <div className=" d-flex">
                <img src={logo} className="img-fluid footer-image float-left" alt="#" />
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
              <p  className='footer-terms-text'>
              <Link className='' to="/terms-conditions" onClick={handleClickUp}>
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
