import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  GET_ALL_GAMESLIST,
  GET_ALL_JACKPOT_GAME_CHART,
  GET_ALL_STARTLINE_GAMES_CHART,
} from "../../service/admin.service";
import Jodi_Chart from "./JodiChart";
import Pana_Chart from "./PanaChart";
import Shree_Jackpot from "./Shree_Jackpot";
import Shree_Starline from "./Shree_Starline";
import back from "../../../RichImages/back.svg";
import { useNavigate } from "react-router-dom";
const Charts = () => {
  const [getChart, setgetChartData] = useState([]);
  const [getStarline, setgetStarlineData] = useState([]);
  const [getJackpot, setgetJackpotData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMESLIST();
    setgetChartData(res.data);

    const res1 = await GET_ALL_STARTLINE_GAMES_CHART();
    setgetStarlineData(res1.data);

    const res2 = await GET_ALL_JACKPOT_GAME_CHART();
    setgetJackpotData(res2.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#E7E7E8", padding: "20px" }}
      >
        <div className="row">
          <Jodi_Chart title="Jodi Chart" data={getChart} link="jodi" />
          <Pana_Chart title="Pana Chart" data={getChart} link="pana" />
          <Shree_Starline title="Starline" data={getStarline} link="starline" />
          <Shree_Jackpot title="Jackpot" data={getJackpot} link="jackpot" />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <button                   onClick={() => navigate(-1)}
 class="download-button" style={{ paddingLeft: "35px",paddingRight: "35px" }}>
            Back &nbsp;
            <img style={{width:'10px'}} src={back} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Charts;
