import React, { useEffect, useState } from "react";
import { GET_ALL_GAMES_RESULT } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import { getWeekStartAndEndDates, fa_time } from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import MadhurDay from "../../Charts/PanaCharts/MadhurDay";
import MadhurNight from "../../Charts/PanaCharts/MadhurNight";

import MilanDay from "../../Charts/PanaCharts/MilanDay";
import MilanNight from "../../Charts/PanaCharts/MilanNight";

import RajdhaniDay from "../../Charts/PanaCharts/RajdhaniDay";
import RajdhaniNight from "../../Charts/PanaCharts/RajdhaniNight";

import Kalyan from "../../Charts/PanaCharts/Kalyan";
import KalyanNight from "../../Charts/PanaCharts/KalyanNight";

import TimeBazar from "../../Charts/PanaCharts/TimeBazar";
import MainBazar from "../../Charts/PanaCharts/MainBazar";

import ShreeDevi from "../../Charts/PanaCharts/ShreeDevi";
import ShreeDeviNight from "../../Charts/PanaCharts/ShreeDeviNight";

import MayaMorning from "../../Charts/PanaCharts/MayaMorning";

import IndraMorning from "../../Charts/PanaCharts/IndraMorning";
import INDRADAY from "../../Charts/PanaCharts/INDRADAY";
import INDRANIGHT from "../../Charts/PanaCharts/INDRANIGHT";
import MAYADAY from "../../Charts/PanaCharts/MAYADAY";
import MAYANIGHT from "../../Charts/PanaCharts/MAYANIGHT";
import SUPREMENIGHT from "../../Charts/PanaCharts/SUPREMENIGHT";
import SUPREMEDAY from "../../Charts/PanaCharts/SUPREMEDAY";

import DHARMNIGHT from "../../Charts/PanaCharts/DHARMNIGHT";
import DHARMDAY from "../../Charts/PanaCharts/DHARMDAY";
import DHARMMORNING from "../../Charts/PanaCharts/DHARMMORNING";

import YUGNIGHT from "../../Charts/PanaCharts/YUGNIGHT";
import YUGDAY from "../../Charts/PanaCharts/YUGDAY";
import YUGMORNING from "../../Charts/PanaCharts/YUGMORNING";

import VEDANIGHT from "../../Charts/PanaCharts/VEDANIGHT";
import VEDADAY from "../../Charts/PanaCharts/VEDADAY";
import VEDAMORNING from "../../Charts/PanaCharts/VEDAMORNING";

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
    // const req = nameRejext(location.state.id);
    const req = location.state;

    // const res = await GET_ALL_GAMES_RESULT({ id: req });
    const res = await GetAllCharts(GET_ALL_GAMES_RESULT, req);
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
              <h2 className="chart-header-font">
                <strong className="color-dark-gray">
                  {location.state.title}
                </strong>
              </h2>

              <p>
                {location.state.title} Pana Chart Satta Matka Record Old History
                Historical Data Bracket Results Chart Online Live Book Digits
                Numbers
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
          <div className="p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12">
            <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12">
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
                nameRejext("KALYAN NIGHT") ? (
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
                nameRejext("MayaMorning") ? (
                <MayaMorning chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("IndraMorning") ? (
                <IndraMorning chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("MAYANIGHT") ? (
                <MAYANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("MAYADAY") ? (
                <MAYADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("INDRANIGHT") ? (
                <INDRANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("INDRADAY") ? (
                <INDRADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("SUPREMEDAY") ? (
                <SUPREMEDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("SUPREMEDAY") ? (
                <SUPREMEDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMMORNING") ? (
                <DHARMMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMNIGHT") ? (
                <DHARMNIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("YUGNIGHT") ? (
                <YUGNIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("YUGDAY") ? (
                <YUGDAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("YUGMORNING") ? (
                <YUGMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) === nameRejext("VEDADAY") ? (
                <VEDADAY chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("VEDANIGHT") ? (
                <VEDANIGHT chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("VEDAMORNING") ? (
                <VEDAMORNING chartData={getData.data} />
              ) : nameRejext(location.state.title) ===
                nameRejext("DHARMDAY") ? (
                <DHARMDAY chartData={getData.data} />
              ) : (
                ""
              )}

              <div className="row justify-content-center">
                <button
                  className=" btn  rounded-pill back-btn mt-2"
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
