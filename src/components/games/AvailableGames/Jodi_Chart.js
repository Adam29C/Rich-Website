import React, { useEffect, useState } from "react";
import { GET_ALL_JODI_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import { nameRejext } from "../../Helpers/StringRejex";
import stars from "../../../RichImages/stars.svg";
import back from "../../../RichImages/back.svg";
import { getWeekStartAndEndDates, fa_time } from "../../Helpers/getWeekDays";

import MadhurDay from "../../Charts/JodiCharts/MadhurDay";
import MadhurNight from "../../Charts/JodiCharts/MadhurNight";
import MilanDay from "../../Charts/JodiCharts/MilanDay";
import MilanNight from "../../Charts/JodiCharts/MilanNight";
import RajdhaniDay from "../../Charts/JodiCharts/RajdhaniDay";
import RajdhaniNight from "../../Charts/JodiCharts/RajdhaniNight";
import Kalyan from "../../Charts/JodiCharts/Kalyan";
import KalyanNight from "../../Charts/JodiCharts/KalyanNight";
import TimeBazar from "../../Charts/JodiCharts/TimeBazar";
import MainBazar from "../../Charts/JodiCharts/MainBazar";
import ShreeDevi from "../../Charts/JodiCharts/ShreeDevi";
import ShreeDeviNight from "../../Charts/JodiCharts/ShreeDeviNight";
import MayaMorning from "../../Charts/JodiCharts/MayaMorning";

import INDRADAY from "../../Charts/JodiCharts/INDRADAY";
import INDRAMORNING from "../../Charts/JodiCharts/INDRAMORNING";
import INDRANIGHT from "../../Charts/JodiCharts/INDRANIGHT";

import MAYADAY from "../../Charts/JodiCharts/MAYADAY";
import MAYANIGHT from "../../Charts/JodiCharts/MAYANIGHT";

import SUPREMEDAY from "../../Charts/JodiCharts/SUPREMEDAY";
import SUPREMENIGHT from "../../Charts/JodiCharts/SUPREMENIGHT";

import VEDAMORNING from "../../Charts/JodiCharts/DHARMDAY";
import VEDADAY from "../../Charts/JodiCharts/VEDADAY";
import VEDANIGHT from "../../Charts/JodiCharts/VEDANIGHT";

import YUGMORNING from "../../Charts/JodiCharts/YUGMORNING";
import YUGDAY from "../../Charts/JodiCharts/YUGDAY";
import DHARMMORNING from "../../Charts/JodiCharts/DHARMMORNING";

import DHARMDAY from "../../Charts/JodiCharts/DHARMDAY";
import YUGNIGHT from "../../Charts/JodiCharts/YUGNIGHT";
import DHARMNIGHT from "../../Charts/JodiCharts/DHARMNIGHT";

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
    var { startOfWeek, endOfWeek } = getWeekStartAndEndDates();
    const req = location.state;

    const res = await GetAllCharts(GET_ALL_JODI_CHART, req);
    setgetData(res);
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
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="game-icons-img"
                  style={{ height: "25px" }}
                  src={stars}
                  alt="#"
                />
                <h1
                  class="mb-0 ms-2 me-2 rich-game-title"
                  style={{ color: "#075358", fontSize: "28px" }}
                >
                  {location.state.title}
                </h1>
                <img
                  className="game-icons-img"
                  style={{ height: "25px" }}
                  src={stars}
                  alt="#"
                />
              </div>

              <p style={{ fontWeight: 600 }}>
                {location.state.title} Jodi Chart Satta Matka Record Old History
                Historical Data Bracket Results Chart Online Live Book Digits
                Numbers
              </p>
            </div>
            <button
              class="download-button"
              style={{ paddingLeft: "35px", paddingRight: "35px" }}
              onClick={handleClick}
              id="scroll-down-button"
            >
              Go To Bottom&nbsp;
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8188 0.409424L8 6.22817L2.18125 0.409424L0 2.59067L8 10.5907L16 2.59067L13.8188 0.409424Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row justify-content-center">
          <div className=" p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12 ">
            <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
              {nameRejext(location.state.title) === nameRejext("MADHUR DAY") ? (
                <MadhurDay chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MADHUR NIGHT") ? (
                <MadhurNight chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MILAN DAY") ? (
                <MilanDay chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MILAN NIGHT") ? (
                <MilanNight chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("RAJDHANI DAY") ? (
                <RajdhaniDay chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("RAJDHANI NIGHT") ? (
                <RajdhaniNight chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("KALYAN") ? (
                <Kalyan chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("KALYAN night") ? (
                <KalyanNight chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("TIME BAZAR") ? (
                <TimeBazar chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MAIN BAZAR") ? (
                <MainBazar chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("SRIDEVI") ? (
                <ShreeDevi chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("sridevinight") ? (
                <ShreeDeviNight chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("mayamorning") ? (
                <MayaMorning chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MAYANIGHT") ? (
                <MAYANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("MAYADAY") ? (
                <MAYADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("INDRANIGHT") ? (
                <INDRANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("INDRAMORNING") ? (
                <INDRAMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("INDRADAY") ? (
                <INDRADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("SUPREMEDAY") ? (
                <SUPREMEDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("SUPREMENIGHT") ? (
                <SUPREMENIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("VEDAMORNING") ? (
                <VEDAMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("VEDADAY") ? (
                <VEDADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("VEDANIGHT") ? (
                <VEDANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("YUGMORNING") ? (
                <YUGMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("YUGDAY") ? (
                <YUGDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMMORNING") ? (
                <DHARMMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMDAY") ? (
                <DHARMDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMNIGHT") ? (
                <DHARMNIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("YUGNIGHT") ? (
                <YUGNIGHT chartData={getData.data} />
              ) : (
                ""
              )}

              <div className="d-flex justify-content-center">
                <button
                  class="download-button"
                  style={{ paddingLeft: "35px", paddingRight: "35px" }}
                  onClick={() => navigate(-1)}
                  id="scroll-down-button"
                >
                  Back &nbsp;
                  <img style={{ width: "10px" }} src={back} />
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
