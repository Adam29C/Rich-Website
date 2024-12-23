import React, { useEffect, useState } from "react";
import "../../assets/css/Herosection.css";
import { GET_CONTACT } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import heroimage from "../../../RichImages/hero section images (1).svg";
import activeuser from "../../../RichImages/Active User icon (2).gif";
import gameicon from "../../../RichImages/game icon.gif";
import supporticon from "../../../RichImages/Support icon.gif";


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
      <div className="container">
        <div className="banner-container">
          <div className="row main-contain-row">
            <div className="col-lg-6 order-1 order-lg-1">
              <div className="banner-left">
                <div className="button-sec">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className={`banner-text-section ${
                          isIPhoneXR ? "d-flex flex-column" : ""
                        }`}
                      >
                        <h1>
                          Play, <span className="rich-text-color">Win</span>,
                          Repeat
                        </h1>
                        <h1>
                          Only On{" "}
                          <span className="rich-text-color">Rich143</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="images-main-herosection">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2 text-center">
              <img
                className="banner-img"
                src={heroimage}
                alt="Illustration of a scene with various elements"
              />
            </div>
          </div>
          <div className="download-now d-flex justify-content-center align-items-center mt(-5)">
            <h1
              className="mb-0 font-400 curser-pointer"
              onClick={() => download()}
            >
              Download App
            </h1>
          </div>
        </div>
      </div>
      <div
        className="contact-container"
        style={{
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "calc(var(--bs-gutter-x)* .5)",
          paddingRight: "calc(var(--bs-gutter-x)* .5)",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center p-3 p-lg-5"
          style={{ marginBottom: "0" }}
        >
          <div className="">
            <div className="d-flex justify-content-center align-items-center gap-3 contact-btn">
              <button className="contact-button-whp">
                <a
                  
                  href={`https://wa.me/+${getData && getData.number}`}
                  className="text-decoration-none"
                >
                  <i className="fa fa-whatsapp me-2" aria-hidden="true"></i>
                  WhatsApp
                </a>
              </button>
              <button className="contact-button-cll">
                <a
                  href={`tel:${getData && getData.number}`}
                  className="text-decoration-none "
                >
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>Call
                  Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
