import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { GET_ALL_GAMESLIST } from "../../service/admin.service";
import icon from "../../../RichImages/chartlist.svg";
import stars from "../../../RichImages/stars.svg"
const Charts_Container = ({ title, data, link, responsive_Class }) => {
  const Details = (route, name) => {
    if (route === "jodi") {
      return `/jodi-chart/${name
        .toLowerCase()
        .replace(/\s+/g, "")}/jodi-chart?`;
    } else if (route === "pana") {
      return `/pana-chart/${name.toLowerCase().replace(/\s+/g, "")}/pana-chart`;
    } else if (route === "starline") {
      return `/starline/${name.toLowerCase().replace(/\s+/g, "")}`;
    } else if (route === "jackpot") {
      return `/andarbahar/${name.toLowerCase().replace(/\s+/g, "")}`;
    }
  };

  return (
    <>
 
      <div className={responsive_Class} >
        <div className="timetable"style={{backgroundColor:'#fff',padding:'30px',borderRadius:'20px'}}>
          <div className="charts-games-main">
            <h3 className="charts-games-title"> {title}</h3>
            <div>
              {title === "Starline" || title === "Jackpot" ? (
                <>
                  <div className="charts-games">
                    <img src={icon} />

                    <h4 className="">
                      <Link
                        to={
                          title === "Starline"
                            ? "/starline/allratanstarline"
                            : "/andarbahar/allratanjackpot"
                        }
                        className="text-decoration-none primary-color"
                        state={{
                          title:
                            title === "Starline"
                              ? "allratanstarline"
                              : "allratanjackpot",
                        }}
                      >
                        {title === "Starline"
                          ? "ALL STARLINE CHART"
                          : "ALL JACKPOT CHART"}
                      </Link>
                    </h4>
                  </div>
                </>
              ) : (
                ""
              )}

              {data &&
                data?.map((data1, index) => (
                  <>
                    <div className="charts-games">
                      <img src={icon} />
                      <h4 className="">
                        <Link
                          to={Details(link, data1.providerName)}
                          state={{ title: data1.providerName, id: data1._id }}
                          className="text-decoration-none primary-color"
                        >
                          {data1.providerName.toUpperCase()}
                        </Link>
                      </h4>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts_Container;
