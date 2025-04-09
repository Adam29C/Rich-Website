import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../../../RichImages/stars.svg";
import { GET_ALL_JACKPOT_GAME } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";

const StartLine = () => {
  const [getData, setgetData] = useState([]);
  const [AppUrl, setAppUrl] = useState("");
  const getResponseData = async () => {
    const res = await GET_ALL_JACKPOT_GAME();
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

  const downloadFile = async () => {
    await downloadAPK();
  };
  return (
    <div>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom cust-m text-center">
          <div className="d-flex text-center justify-content-center align-items-center">
            <img className="game-icons-img" src={star} alt="#" />
            <h5 className="mb-0 ms-2 me-2 rich-game-title">JACKPOT GAMES</h5>
            <img className="game-icons-img" src={star} alt="#" />
          </div>
          <p className="rich-game-title-text">
            Most Trusted Game Available on our Platform
          </p>
        </div>
        <div className="container">
          <div className="row">
            {getData?.map((data, index) => {
              let getmsg =
                showData(data?.gameDetails) != undefined &&
                showData(data?.gameDetails)?.message;

              return (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6  mb-3">
                  <div className="second-card">
                    <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center">
                      <div className="card-text">
                        <div className="card-text-main">
                          <h4 className="second-card-title">
                            {data.providerName.toUpperCase()}
                          </h4>
                          <h3 className="second-card-text">
                            {data.providerResult}
                          </h3>

                          {/* <h6
                            className={`mb-1 ${
                              getmsg == "Close for today"
                                ? "close-for-today"
                                : getmsg == "Running for close"
                                ? "betting-closed"
                                : getmsg == "Running for open"
                                ? "default-message"
                                : "default-message"
                            }`}
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
                            {getmsg}
                          </h6> */}
                          <h6
                            className={`mb-2 ${
                              getmsg == "Close for today"
                                ? "close-for-today"
                                : getmsg == "Running for close"
                                ? "betting-closed"
                                : getmsg == "Running for open"
                                ? "default-message"
                                : "default-message"
                            }`}
                            style={{
                              fontWeight: 600,
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
                            {getmsg}
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        {showData(data?.gameDetails)?.message ===
                        "Close for today" ? (
                          <div className="play-icon">
                            <a
                              href="#"
                              onClick={() =>
                                downloadFile(
                                  showData(data?.gameDetails)?.message
                                )
                              }
                            >
                              {/* <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="25" cy="25" r="20" fill="#FF0000" />
                                <path
                                  d="M31.9888 34.9501C31.127 34.9456 30.2576 34.609 29.6445 33.9954L24.9975 29.3484L20.3505 33.9954C19.1393 35.2067 17.179 35.2996 15.9824 34.2039C14.7117 33.0404 14.6684 30.9693 15.8833 29.7544L20.6434 24.994C20.6434 24.994 15.8867 20.2373 15.8833 20.2339C14.6546 19.0051 14.7223 16.9111 16.0117 15.7581C17.2273 14.6703 19.1215 14.7642 20.3261 15.9687L24.9975 20.6405L29.669 15.9687C30.8723 14.7642 32.7671 14.6703 33.9833 15.7581C35.2709 16.9097 35.3277 19.0182 34.1117 20.2342L29.3516 24.9946C29.3516 24.9946 34.1103 29.7529 34.1117 29.7544C35.3356 30.9781 35.2874 33.0373 34.0127 34.2039C33.4525 34.7165 32.7234 34.9539 31.9888 34.9501ZM24.9975 27.8565C25.1659 27.8562 25.3351 27.9152 25.4573 28.0375L30.5299 33.11C31.274 33.8541 32.4571 33.93 33.1664 33.2806C33.9189 32.5918 33.9456 31.359 33.2264 30.6398C33.2264 30.6398 28.0457 25.4588 28.0407 25.4538C27.7855 25.1986 27.7915 24.7674 28.0554 24.5207C28.0554 24.5207 33.222 19.3529 33.2264 19.3485C33.9627 18.612 33.9209 17.3824 33.1481 16.6912C32.4407 16.0583 31.2777 16.1323 30.5544 16.8541L25.4573 21.9514C25.2177 22.1902 24.7994 22.1972 24.5524 21.9655L19.4407 16.8541C18.7186 16.1323 17.555 16.0583 16.847 16.6911C16.0883 17.3692 16.0498 18.6299 16.7687 19.3482C16.7687 19.3482 21.9443 24.5247 21.9543 24.5348C22.1972 24.7776 22.2015 25.2231 21.9397 25.4679C21.9397 25.4679 16.7744 30.6341 16.7687 30.6398C16.0452 31.3634 16.0782 32.5931 16.8286 33.2806C17.5385 33.93 18.7223 33.8535 19.4652 33.11C19.4652 33.11 24.5337 28.0415 24.5377 28.0375C24.6567 27.9185 24.8266 27.8569 24.9975 27.8565Z"
                                  fill="white"
                                />
                                <circle
                                  cx="25"
                                  cy="25"
                                  r="24"
                                  stroke="#FF0000"
                                  stroke-width="2"
                                />
                              </svg> */}
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 61 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M60.9313 30C60.9313 46.5685 47.469 60 30.8624 60C14.2558 60 0.793457 46.5685 0.793457 30C0.793457 13.4315 14.2558 0 30.8624 0C47.469 0 60.9313 13.4315 60.9313 30Z"
                                  fill="#ED3636"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23.3655 15.4429C23.0379 15.1961 22.6483 15.0459 22.2405 15.0089C21.8326 14.972 21.4226 15.0499 21.0563 15.2338C20.6901 15.4177 20.382 15.7004 20.1667 16.0502C19.9514 16.4 19.8374 16.8031 19.8374 17.2143V43.7857C19.8374 44.1969 19.9514 44.6 20.1667 44.9498C20.382 45.2996 20.6901 45.5823 21.0563 45.7662C21.4226 45.9501 21.8326 46.028 22.2405 45.9911C22.6483 45.9541 23.0379 45.8039 23.3655 45.5571L41.0059 32.2714C41.2798 32.0652 41.5021 31.7977 41.6551 31.4903C41.8082 31.1828 41.8879 30.8438 41.8879 30.5C41.8879 30.1562 41.8082 29.8172 41.6551 29.5097C41.5021 29.2023 41.2798 28.9348 41.0059 28.7286L23.3655 15.4429Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </div>
                        ) : (
                          <>
                            {" "}
                            <div className="play-icon zoom-in-zoom-out">
                              <a
                                href="#"
                                onClick={() =>
                                  downloadFile(
                                    showData(data?.gameDetails)?.message
                                  )
                                }
                              >
                                {/* <svg
                                  width="50"
                                  height="50"
                                  viewBox="0 0 50 50"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M45 25C45 36.0457 36.0457 45 25 45C13.9543 45 5 36.0457 5 25C5 13.9543 13.9543 5 25 5C36.0457 5 45 13.9543 45 25Z"
                                    fill="url(#paint0_linear_300_2845)"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M21.5462 16.5823C21.3632 16.445 21.1456 16.3615 20.9177 16.3409C20.6899 16.3204 20.4608 16.3637 20.2562 16.466C20.0515 16.5683 19.8795 16.7256 19.7592 16.9202C19.6389 17.1148 19.5752 17.339 19.5752 17.5678V32.3504C19.5752 32.5792 19.6389 32.8035 19.7592 32.9981C19.8795 33.1927 20.0515 33.3499 20.2562 33.4523C20.4608 33.5546 20.6899 33.5979 20.9177 33.5773C21.1456 33.5568 21.3632 33.4732 21.5462 33.3359L31.4013 25.9446C31.5543 25.8299 31.6785 25.6811 31.764 25.51C31.8495 25.339 31.894 25.1504 31.894 24.9591C31.894 24.7679 31.8495 24.5793 31.764 24.4082C31.6785 24.2372 31.5543 24.0884 31.4013 23.9736L21.5462 16.5823Z"
                                    fill="white"
                                  />
                                  <circle
                                    cx="25"
                                    cy="25"
                                    r="24"
                                    stroke="url(#paint1_linear_300_2845)"
                                    stroke-width="2"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_300_2845"
                                      x1="-11.3478"
                                      y1="-8.04348"
                                      x2="58.7762"
                                      y2="1.2053"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#1C3E35" />
                                      <stop offset="1" stop-color="#4AA48C" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_300_2845"
                                      x1="-20.4348"
                                      y1="-16.3044"
                                      x2="67.2202"
                                      y2="-4.74337"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#1C3E35" />
                                      <stop offset="1" stop-color="#4AA48C" />
                                    </linearGradient>
                                  </defs>
                                </svg> */}
                                <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 61 60"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M60.9313 30C60.9313 46.5685 47.469 60 30.8624 60C14.2558 60 0.793457 46.5685 0.793457 30C0.793457 13.4315 14.2558 0 30.8624 0C47.469 0 60.9313 13.4315 60.9313 30Z"
                                    fill="#028a94"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.3655 15.4429C23.0379 15.1961 22.6483 15.0459 22.2405 15.0089C21.8326 14.972 21.4226 15.0499 21.0563 15.2338C20.6901 15.4177 20.382 15.7004 20.1667 16.0502C19.9514 16.4 19.8374 16.8031 19.8374 17.2143V43.7857C19.8374 44.1969 19.9514 44.6 20.1667 44.9498C20.382 45.2996 20.6901 45.5823 21.0563 45.7662C21.4226 45.9501 21.8326 46.028 22.2405 45.9911C22.6483 45.9541 23.0379 45.8039 23.3655 45.5571L41.0059 32.2714C41.2798 32.0652 41.5021 31.7977 41.6551 31.4903C41.8082 31.1828 41.8879 30.8438 41.8879 30.5C41.8879 30.1562 41.8082 29.8172 41.6551 29.5097C41.5021 29.2023 41.2798 28.9348 41.0059 28.7286L23.3655 15.4429Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div
                      className="bottom-sec d-flex align-items-center justify-content-start"
                      style={{ marginLeft: "17px" }}
                    >
                      <Link
                        to={`/andarbahar/${data.providerName
                          .toLowerCase()
                          .replace(/\s+/g, "")}`}
                        state={{ title: data.providerName, id: data._id }}
                        className="chat-btn "
                      >
                        <span>Jodi Chart</span>
                      </Link>
                    </div>
                    <div class="result__time d-flex justify-content-around" >
                      <span>
                        Open Bids&nbsp;
                        <strong>
                          {showData(data?.gameDetails) != undefined &&
                            showData(data?.gameDetails)?.OBT}
                        </strong>
                      </span>
                      <span>
                        Close Bids&nbsp;
                        <strong>
                          {showData(data?.gameDetails) != undefined &&
                            showData(data?.gameDetails)?.CBT}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLine;
