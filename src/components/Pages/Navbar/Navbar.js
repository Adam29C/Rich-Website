import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import headerLog from "../../../RichImages/Rich143 logo.svg";
import download_btn from "../../../RichImages/download_btn.png";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="banner-section ">
          <div className="header-container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid header-content-main">
                <Logo />
                <button
                  class="navbar-toggler navbar-toggler-btn custom-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse custome-nav  ${
                    isCollapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                  ref={collapseRef}
                >
                  <div className="navigation-links"></div>

                  <div className="navigation-links">
                    <NavigationLinks />
                  </div>

                  <div className="download-btn-main-12">
                    <DownloadButton />
                  </div >
                
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <>
      
      <Link className="nav-link  active" aria-current="page" to="/">
        <img className="logo_navbar" src={headerLog} alt="Logo" />
      </Link>
    </>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link link-hover-effect" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-hover-effect" to="/charts">
          Charts
        </Link>
      </li>
    </ul>
  );
};

const download = async () => {
  await downloadAPK();
};

const DownloadButton = () => {
  return (
    // <a href="#" id="BTTTTT" class="btn1">Download Now</a>
    <>
      {/* <button className="downloadBtn" onClick={download}>
        Download Now
      </button> */}


      <div class="button-container_3">
        <div class="button-container_2">
          <div class="button-container">
            <button class="download-button" onClick={download}>
              <span>Download</span>
              <img className="test_image" src={download_btn} alt="Logo" />
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
