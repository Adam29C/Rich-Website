import React, { useEffect, useState } from "react";
import { GET_ALL_STARLINE_GAME_PANA_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import {
  getWeekStartAndEndDates,
  getActualDateFormate,
  fa_time,
} from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import ShreeDay from "../../Charts/starLinePanaChart/7PM";
import ShreeNight from "../../Charts/starLinePanaChart/8PM";

import MadhurDay from "../../Charts/starLinePanaChart/12PM";
import MadhurNight from "../../Charts/starLinePanaChart/1PM";

import MilanDay from "../../Charts/starLinePanaChart/3PM";
import MilanNight from "../../Charts/starLinePanaChart/4PM";

import RajdhaniDay from "../../Charts/starLinePanaChart/5PM";
import RajdhaniNight from "../../Charts/starLinePanaChart/6PM";

import Kalyan from "../../Charts/starLinePanaChart/10Am";
import KalyanNight from "../../Charts/starLinePanaChart/11Am";

import TimeBazar from "../../Charts/starLinePanaChart/9PM";
import MainBazar from "../../Charts/starLinePanaChart/2PM";

import AllStarline from "../../Charts/starLinePanaChart/AllStarline"
import { GetAllCharts } from "../../Helpers/GetCharts";
const Pana_Chart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [getData, setgetData] = useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickUp = () => {
    const targetElement = document.getElementById("scroll-up");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {

    if (location.state.title != "allratanstarline") {
      // const req = nameRejext(location.state.title);
    // const req = location.state.id;
    const req = location.state;


      const res = await GetAllCharts(GET_ALL_STARLINE_GAME_PANA_CHART, req);
      setgetData(res);
    }

  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div id="scroll-up"></div>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="text-center col-xl-12 col-q-12 col-md-12 col-sm-12 chart-header ">
            <div className="">
              <h2 className="chart-header-font">
                <strong style={{ color: "rgb(51, 51, 51)" }}>
                  Ratan Starline &nbsp;
                  {location.state.title === 'allratanstarline' ? "" : location.state.title}&nbsp; Chart
                </strong>
              </h2>
              <p>
                {location.state.title === 'allratanstarline' ? "" : location.state.title}&nbsp; Pana Chart Satta Matka Record Old
                History Historical Data Bracket Results Chart Online Live Book
                Digits Numbers
              </p>
            </div>

            <button
              className="btn-scroll my-3"
              onClick={handleClick}
              id="scroll-down-button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z" />
              </svg>
              Go To Bottom
            </button>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row justify-content-center">
          <div className="p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12  ">
            <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
              {nameRejext(location.state.title) === nameRejext("7:00PM") ? (
                <ShreeDay chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("8:00PM") ? (
                <ShreeNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("12:00PM") ? (
                <MadhurDay chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("1:00PM") ? (
                <MadhurNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("3:00PM") ? (
                <MilanDay chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("4:00PM") ? (
                <MilanNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("5:00PM") ? (
                <RajdhaniDay chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("6:00PM") ? (
                <RajdhaniNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("10:00Am") ? (
                <Kalyan chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("11:00Am") ? (
                <KalyanNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("9:00PM") ? (
                <TimeBazar chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("2:00PM") ? (
                <MainBazar chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("allratanstarline") ? (
                <AllStarline chartData={getData.data} />
              ) : (
                ""
              )}
              <div className="row justify-content-center">
                <button
                  className="btn  rounded-pill back-btn mt-2"
                  onClick={() => navigate(-1)}
                  id="scroll-down-button"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <div id="scroll-down"></div>
    </>
  );
};

export default Pana_Chart;
