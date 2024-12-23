import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gameIcon from "../../../RichImages/game icon.gif";

import { GET_ALL_STARTLINE_GAMES } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";

const StartLine = () => {
  const [getData, setgetData] = useState([]);
  const [AppUrl, setAppUrl] = useState("");
  const getResponseData = async () => {
    const res = await GET_ALL_STARTLINE_GAMES();
    if (res.status) {
      setgetData(res.data);
      setAppUrl(res.appInfo);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  const showData = (data) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data.length > 0) {
      const result = [];
      for (const item of data) {
        if (
          weekday
            .map((day) => day.toLowerCase())
            .includes(item.gameDay.toLowerCase())
        ) {
          return item;
        }
      }
    }
  };

  const downloadFile = async() => {
   await downloadAPK()

  };
  return (
    <div>
      <div className="available-component">
    
        <div className="heding-sec heading-sec-custom cust-m text-center">
         <div className="d-flex text-center justify-content-center align-items-center"> 
         <img className="game-icons-img" src={gameIcon} alt="#" />
          <h5 className="mb-0 ms-2 me-2 rich-game-title">STARLINE GAMES</h5>
          <img className="game-icons-img" src={gameIcon} alt="#" />
          </div>
          <p className="rich-game-title-text">
          Most Trusted Game Available on our Platform
          </p>
        </div>
        <div className="container">
          <div className="row">
            {getData?.map((data, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-3">
                <div className="second-card">
                  <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center">
                    <div className="card-text">
                      <div className="card-text-main">
                        <h4 className="second-card-title">
                          {data.providerName.toUpperCase()}
                        </h4>
                        <h3 className="second-card-text">{data.providerResult}</h3>

                        <h6
                          className="mb-1"
                          style={{
                            color:
                              showData(data?.gameDetails) != undefined &&
                              showData(data?.gameDetails)?.message ==
                                "Close for today"
                                ? "red"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for close"
                                ? "#4BB543"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for open"
                                ? "#4BB543"
                                : "#4BB543",
                          }}
                        >
                          {showData(data?.gameDetails)?.message}
                        </h6>
                      </div>
                    </div>
                    {showData(data?.gameDetails)?.message ===
                      "Close for today" ? (
                        <div
                        className="play-icon"
                      >
                        <a
                          href="#"
                          onClick={() =>
                            downloadFile(
                              showData(data?.gameDetails)?.message
                            )
                          }
                        >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="30" cy="30" r="30" fill="#FF0000" />
                          <path
                            d="M40.4833 44.9251C39.1905 44.9184 37.8864 44.4136 36.9668 43.4931L29.9963 36.5226L23.0258 43.4931C21.2089 45.31 18.2685 45.4494 16.4736 43.8059C14.5675 42.0606 14.5027 38.9539 16.325 37.1316L23.4651 29.991C23.4651 29.991 16.3301 22.856 16.325 22.8508C14.4818 21.0077 14.5834 17.8667 16.5176 16.1371C18.3409 14.5055 21.1823 14.6463 22.9891 16.4531L29.9963 23.4607L37.0035 16.4531C38.8084 14.6463 41.6507 14.5055 43.475 16.1371C45.4064 17.8645 45.4916 21.0273 43.6676 22.8513L36.5275 29.9919C36.5275 29.9919 43.6654 37.1294 43.6676 37.1316C45.5034 38.9672 45.4312 42.056 43.5191 43.8058C42.6788 44.5748 41.5851 44.9309 40.4833 44.9251ZM29.9963 34.2848C30.2488 34.2842 30.5027 34.3729 30.686 34.5562L38.2948 42.165C39.411 43.2812 41.1857 43.3949 42.2496 42.4209C43.3783 41.3877 43.4184 39.5385 42.3396 38.4596C42.3396 38.4596 34.5686 30.6882 34.5611 30.6807C34.1783 30.2979 34.1872 29.6511 34.5831 29.2811C34.5831 29.2811 42.333 21.5293 42.3396 21.5227C43.444 20.418 43.3814 18.5736 42.2222 17.5367C41.161 16.5875 39.4165 16.6984 38.3315 17.7812L30.686 25.4271C30.3265 25.7853 29.6991 25.7958 29.3286 25.4482L21.6611 17.7812C20.5779 16.6985 18.8326 16.5875 17.7705 17.5367C16.6324 18.5538 16.5747 20.4449 17.653 21.5223C17.653 21.5223 25.4165 29.2871 25.4315 29.3022C25.7958 29.6665 25.8023 30.3346 25.4095 30.7018C25.4095 30.7018 17.6616 38.4511 17.653 38.4596C16.5678 39.5451 16.6174 41.3896 17.7429 42.4209C18.8078 43.3949 20.5834 43.2803 21.6978 42.165C21.6978 42.165 29.3006 34.5622 29.3066 34.5562C29.485 34.3777 29.74 34.2854 29.9963 34.2848Z"
                            fill="white"
                          />
                        </svg>
                        </a>
                        </div>
                      ) : (
                        <>
                          {" "}
                          <div
                            className="play-icon zoom-in-zoom-out"
                          >
                            <a
                              href="#"
                              onClick={() =>
                                downloadFile(
                                  showData(data?.gameDetails)?.message
                                )
                              }
                            >
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z"
                                  fill="#26A967"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M24.8193 17.3735C24.5448 17.1676 24.2183 17.0422 23.8766 17.0114C23.5348 16.9806 23.1912 17.0455 22.8842 17.199C22.5773 17.3525 22.3192 17.5884 22.1388 17.8803C21.9584 18.1722 21.8628 18.5086 21.8628 18.8517V41.0256C21.8628 41.3688 21.9584 41.7052 22.1388 41.9971C22.3192 42.289 22.5773 42.5249 22.8842 42.6784C23.1912 42.8319 23.5348 42.8968 23.8766 42.866C24.2183 42.8352 24.5448 42.7098 24.8193 42.5039L39.6019 31.417C39.8314 31.2448 40.0177 31.0216 40.146 30.7651C40.2743 30.5085 40.3411 30.2256 40.3411 29.9387C40.3411 29.6518 40.2743 29.3689 40.146 29.1123C40.0177 28.8557 39.8314 28.6325 39.6019 28.4604L24.8193 17.3735Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </div>
                        </>
                      )}
                  
                  </div>
                  <div className="bottom-sec d-flex align-items-center justify-content-center">
                    <Link
                      to={`/starline/${data?.providerName
                        .toLowerCase()
                        .replace(/\s+/g, "")}`}
                      state={{ title: data?.providerName ,  id :data._id   }}
                      className="chat-btn"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Pana Chart</span>
                    </Link>
                  </div>
                  
                  <div class="result__time d-flex justify-content-between">
                    <span>
                      Open Bids :
                      <strong>
                        {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.OBT}
                      </strong>
                    </span>
                    <span>
                      Close Bids :{" "}
                      <strong>
                        {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.CBT}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StartLine;


