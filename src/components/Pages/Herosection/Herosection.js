import React, { useEffect, useState } from "react";
import "../../assets/css/Herosection.css";
import { GET_CONTACT } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";
// import heroimage from "../../../RichImages/Bannerimg.jpg";
import activeuser from "../../../RichImages/active.svg";
import gameicon from "../../../RichImages/games.svg";
import supporticon from "../../../RichImages/support.svg";
import call from "../../../RichImages/whatspp.svg";
import whatspp from "../../../RichImages/call.svg";
import heroimagerich from "../../../RichImages/heroimagerich.png";
import clickhand from "../../../RichImages/clickhand.gif";

const Section2 = () => {
  const [getData, setgetData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isIPhoneXR = windowWidth === 414 || windowWidth === 896;

  const download = async () => {
    await downloadAPK();
  };

  return (
    <>
      <div className="container-fluid bg-light p-2">
        <div className="row">
          {/* Left Column with Text */}
          <div className="col-md-6 parent-class">
            <h1 className="custom-text">Welcome To Rich143</h1>
            <p className="lead">
              Play Big, Win Big,
              <br /> Only On Rich143
            </p>
            <div className="second-parent">
              <a
                href="tel:+919931437143"
                // className="btn btn-custom me-3"
                class="download-button new-btn"
              >
                Call Now &nbsp;
                <img style={{ height: "18px" }} src={call} />
              </a>
              <a
                href={`https://wa.me/+${getData && getData.number}`}
                class="download-button new-btn "
              >
                WhatsApp &nbsp;
                <img style={{ height: "18px" }} src={whatspp} />
              </a>
            </div>
            <p className="mt-3 contact-info">
              Connect With Phone Call
              <span className="contact-number">
                <br /> +91 9931437143
              </span>
            </p>
          </div>
          {/* Right Column with Image */}
          <div className="col-md-6 text-center">
            <img src={heroimagerich} alt="Rich143" className=" banner-img" />
          </div>
        </div>
        <button
        className="col-md-10 col-10 move-color   my-3 mb-4"
        onClick={download}
      >
        <div className="download-icon">
        <i className="fa-2x fa fa-download mt-1 custom-color" aria-hidden="true" />
        </div>
        <h1 className="mb-0 font-400 curser-pointer">Download App</h1>
        {/* <img src={clickhand} className="clickhand"/> */}
      </button>

{/* <div class='butcontainer col-6   my-3 mb-4'>
  <span class='pulse-button'>        <h1 className="mb-0 font-400 curser-pointer">Download App</h1>
  </span>
</div> */}
      </div>
    
      <div className="images-main-herosection col-md-12 py-3">
        <div></div>

        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={activeuser}
            alt="Alternative Text Here"
          />
          <p>Active User</p>
          <h1>1M +</h1>
        </div>
        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={gameicon}
            alt="Alternative Text Here"
          />
          <p className="">Games</p>
          <h1 className="">25 +</h1>
        </div>
        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={supporticon}
            alt="Alternative Text Here"
          />
          <p>Support</p>
          <h1>24/7</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Section2;
