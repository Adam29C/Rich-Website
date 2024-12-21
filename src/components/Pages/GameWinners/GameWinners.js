import React, { useEffect, useState } from "react";
import "../../assets/css/Section3.css";
// import Section4 from "./Section4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../../images/Star-Icon.svg'

const Section3 = () => {
  useEffect(() => {
    // This will run once when the component mounts
    // It's used to initialize any third-party libraries or perform other setup tasks
    // For Slick slider, no additional setup is required here because we've imported the necessary CSS files
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 10,

    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
    },
  };
  return (
    <>
      <div className="container">
        <div className="winner-container">
          <div className="heding-sec heading-sec-custom m-2 d-flex text-center justify-content-center align-items-center">
            <img
              src={star}
              alt="https://khatri555.com/"
            />
            <h1 className="mb-0 mt-3 ms-2 me-2 font-700">Today's Top Winners</h1>
            <img
              src={star}
              alt="https://khatri555.com/"
            />
          </div>
          <Slider {...settings}>
            <div>
              <div className="custom-card custom-card-padding">
                <h4 className="primary-color">Amit</h4>
                <h4 className="font-700 color-primary">₹61,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Priya</h4>
                <h4 className="font-700 color-primary">₹35,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Himanshu</h4>
                <h4 className="font-700 color-primary">₹51,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Garima</h4>
                <h4 className="font-700 color-primary">₹25,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Yash</h4>
                <h4 className="font-700 color-primary">₹45,200</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Ajit</h4>
                <h4 className="font-700 color-primary">₹45,200</h4>
              </div>
            </div>
          </Slider>
        </div>

        {/* ..................................... */}
      </div>
    </>
  );
};

export default Section3;
