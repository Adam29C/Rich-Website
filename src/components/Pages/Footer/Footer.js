import React from "react";
import eighteen from "../../../RichImages/18-new.svg";
import begameble from "../../../RichImages/be-gamble-new.svg";
import gambling from "../../../RichImages/gambling-new.svg";
// import dark_back_logo from "../../../RichImages/richlogo-new-white.svg";
import logo from "../../../RichImages/logofooter.png"
import "../../../App.css";


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
        <div className="container-fluid">
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
            <div className="col-xl-12 col-md-12 d-flex flex-column">
              <div className=" d-flex justify-content-center">
                <img
                  src={logo}
                  className="img-fluid footer-image float-left"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-12 col-md-12 ">
              <div className="footer-right-image">
                {/* <div className="margin-img">
                  <img
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    src={eighteen}
                    className="footer-img-3"
                  />
                </div> */}
                <p className="footer-para-test ">
                  Players need to be 18+ in order to register. Underage gambling
                  is prohibited.
                </p>
              </div>
              <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{ border:'2px solid white',width:'80%'}}></div>

            </div>
           
              <div className="footer-img-sec" >
             
                <img
                  className="img1"
                  src={begameble}
                  alt=""
                />
              <img
                  className="img2"
                  src={gambling}
                  alt=""
                />
              </div>
            </div>
            
          </div>
          <div className="footer-last-content gCDmxv">
            <p className="copyright-text ">
              Copyright © 2025 - Rich143 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
