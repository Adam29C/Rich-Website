import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import gameIcon from "../../../RichImages/game icon.gif";
import star from "../../../RichImages/stars.svg";

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

  const downloadFile = async () => {
    await downloadAPK();
  };
  return (
    <div>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom cust-m text-center">
          <div className="d-flex text-center justify-content-center align-items-center">
            <img className="game-icons-img" src={star} alt="#" />
            <h5 className="mb-0 ms-2 me-2 rich-game-title">STARLINE GAMES</h5>
            <img className="game-icons-img" src={star} alt="#" />
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
                        <h3 className="second-card-text">
                          {data.providerResult}
                        </h3>

                        {/* <h6
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
                        </h6> */}
                        <h6
                          className="mb-2"
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
                          {/* {showData(data?.gameDetails)?.message}
                          <br/> */}
                          {
                               showData(data?.gameDetails) != undefined &&
                               showData(data?.gameDetails)?.message ==
                                 "Close for today"
                                 ? "Close For Today"
                                 : showData(data?.gameDetails)?.message ==
                                   "Betting is running for close"
                                 ? "Running For Close"
                                 : showData(data?.gameDetails)?.message ==
                                   "Betting is running for open"
                                 ? "Running For Open"
                                 : "Running For Open"
                            }
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
                              downloadFile(showData(data?.gameDetails)?.message)
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
                            {/* <svg
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
                            </svg> */}
                             <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.7911 26.2267L26.0467 20.7311C26.3237 20.537 26.4622 20.2933 26.4622 20C26.4622 19.7067 26.3237 19.463 26.0467 19.2689L17.7911 13.7733C17.477 13.5718 17.1689 13.5526 16.8667 13.7156C16.563 13.88 16.4111 14.1415 16.4111 14.5V25.5111C16.4111 25.8681 16.563 26.1274 16.8667 26.2889C17.1689 26.4504 17.477 26.4296 17.7911 26.2267ZM20.0067 40C17.2422 40 14.6422 39.4778 12.2067 38.4333C9.77259 37.3874 7.65481 35.9689 5.85333 34.1778C4.05185 32.3867 2.62593 30.2807 1.57556 27.86C0.525185 25.4393 0 22.8481 0 20.0867C0 18.9578 0.0925926 17.8437 0.277778 16.7444C0.462963 15.6437 0.726667 14.5474 1.06889 13.4556C1.16815 13.1489 1.36222 12.9296 1.65111 12.7978C1.94148 12.6644 2.22148 12.6607 2.49111 12.7867C2.78148 12.9126 2.98296 13.1341 3.09556 13.4511C3.20815 13.7681 3.21481 14.0852 3.11556 14.4022C2.84148 15.3207 2.6237 16.2489 2.46222 17.1867C2.30074 18.1244 2.22074 19.0622 2.22222 20C2.22222 24.963 3.94444 29.1667 7.38889 32.6111C10.8333 36.0555 15.037 37.7778 20 37.7778C24.963 37.7778 29.1667 36.0555 32.6111 32.6111C36.0556 29.1667 37.7778 24.963 37.7778 20C37.7778 15.037 36.0556 10.8333 32.6111 7.38889C29.1667 3.94444 24.963 2.22222 20 2.22222C19.0667 2.22222 18.1437 2.29407 17.2311 2.43778C16.3185 2.58148 15.4148 2.79704 14.52 3.08444C14.2044 3.18518 13.897 3.17407 13.5978 3.05111C13.2985 2.92815 13.0763 2.73185 12.9311 2.46222C12.7859 2.19259 12.777 1.91926 12.9044 1.64222C13.0304 1.36815 13.2333 1.18074 13.5133 1.08C14.5104 0.73037 15.5304 0.462963 16.5733 0.277778C17.6163 0.0925926 18.6756 0 19.7511 0C22.5452 0 25.1704 0.519259 27.6267 1.55778C30.083 2.5963 32.2259 4.02296 34.0556 5.83778C35.8852 7.65259 37.3333 9.77555 38.4 12.2067C39.4667 14.6378 40 17.2341 40 19.9956C40 22.757 39.4756 25.3563 38.4267 27.7933C37.3778 30.2304 35.9526 32.3481 34.1511 34.1467C32.3496 35.9452 30.2341 37.3711 27.8044 38.4244C25.3748 39.4778 22.7756 40.003 20.0067 40ZM6.49556 8.46222C5.96815 8.46222 5.50889 8.26592 5.11778 7.87333C4.72667 7.48222 4.53111 7.02296 4.53111 6.49555C4.53111 5.96815 4.72667 5.50889 5.11778 5.11778C5.50889 4.72667 5.96815 4.53111 6.49556 4.53111C7.02296 4.53111 7.48222 4.72667 7.87333 5.11778C8.26445 5.50889 8.46074 5.96815 8.46222 6.49555C8.4637 7.02296 8.26741 7.48222 7.87333 7.87333C7.47926 8.26444 7.02 8.46074 6.49556 8.46222ZM6.66667 20C6.66667 16.2963 7.96296 13.1481 10.5556 10.5556C13.1481 7.96296 16.2963 6.66667 20 6.66667C23.7037 6.66667 26.8519 7.96296 29.4444 10.5556C32.037 13.1481 33.3333 16.2963 33.3333 20C33.3333 23.7037 32.037 26.8518 29.4444 29.4444C26.8519 32.037 23.7037 33.3333 20 33.3333C16.2963 33.3333 13.1481 32.037 10.5556 29.4444C7.96296 26.8518 6.66667 23.7037 6.66667 20Z"
                                  fill="#ED1C24"
                                />
                                <circle
                                  cx="19.5"
                                  cy="20.5"
                                  r="7.5"
                                  fill="#ED1C24"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.4584 27.1005L20.4501 27.102L20.3959 27.1287L20.3807 27.1317L20.37 27.1287L20.3159 27.102C20.3078 27.0995 20.3017 27.1007 20.2976 27.1058L20.2946 27.1134L20.2816 27.4396L20.2854 27.4548L20.2931 27.4647L20.3723 27.5211L20.3838 27.5242L20.3929 27.5211L20.4722 27.4647L20.4813 27.4525L20.4843 27.4396L20.4714 27.1142C20.4694 27.1061 20.465 27.1015 20.4584 27.1005ZM20.6604 27.0144L20.6505 27.0159L20.5095 27.0867L20.5019 27.0944L20.4996 27.1028L20.5133 27.4304L20.5171 27.4396L20.5232 27.4449L20.6764 27.5158C20.686 27.5183 20.6934 27.5163 20.6985 27.5097L20.7015 27.499L20.6756 27.0311C20.6731 27.022 20.668 27.0164 20.6604 27.0144ZM20.1155 27.0159C20.1122 27.0138 20.1081 27.0132 20.1043 27.014C20.1005 27.0149 20.0971 27.0172 20.0949 27.0205L20.0904 27.0311L20.0645 27.499C20.065 27.5082 20.0693 27.5143 20.0774 27.5173L20.0888 27.5158L20.242 27.4449L20.2496 27.4388L20.2527 27.4304L20.2656 27.1028L20.2633 27.0936L20.2557 27.086L20.1155 27.0159Z"
                                  fill="#F5F5F5"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M20.0068 20.6239L24.048 24.6651C24.2624 24.8795 24.5533 25 24.8566 25C25.1598 25 25.4507 24.8795 25.6651 24.6651C25.8795 24.4507 26 24.1598 26 23.8566C26 23.5533 25.8795 23.2625 25.6651 23.048L21.6224 19.0068L25.6643 14.9657C25.7705 14.8595 25.8546 14.7334 25.9121 14.5947C25.9695 14.456 25.999 14.3074 25.999 14.1572C25.9989 14.0071 25.9693 13.8585 25.9118 13.7198C25.8544 13.5811 25.7701 13.4551 25.6639 13.349C25.5578 13.2428 25.4317 13.1587 25.293 13.1012C25.1543 13.0438 25.0056 13.0143 24.8555 13.0143C24.7054 13.0144 24.5567 13.044 24.4181 13.1015C24.2794 13.1589 24.1534 13.2432 24.0472 13.3494L20.0068 17.3905L15.9657 13.3494C15.8603 13.2401 15.7342 13.153 15.5947 13.093C15.4553 13.033 15.3053 13.0014 15.1536 13C15.0018 12.9987 14.8512 13.0275 14.7107 13.0849C14.5702 13.1423 14.4426 13.2271 14.3352 13.3344C14.2278 13.4417 14.1429 13.5693 14.0853 13.7097C14.0278 13.8502 13.9988 14.0007 14 14.1525C14.0013 14.3043 14.0327 14.4543 14.0926 14.5937C14.1524 14.7332 14.2395 14.8594 14.3486 14.9649L18.3913 19.0068L14.3493 23.0488C14.2402 23.1543 14.1532 23.2805 14.0934 23.4199C14.0335 23.5594 14.002 23.7094 14.0008 23.8612C13.9996 24.013 14.0285 24.1635 14.0861 24.304C14.1436 24.4444 14.2286 24.572 14.3359 24.6793C14.4433 24.7866 14.571 24.8714 14.7115 24.9288C14.852 24.9862 15.0025 25.015 15.1543 25.0136C15.3061 25.0123 15.4561 24.9807 15.5955 24.9207C15.7349 24.8607 15.861 24.7736 15.9664 24.6643L20.0068 20.6239Z"
                                  fill="#F5F5F5"
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
                              {/* <svg
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
                              </svg> */}
                              <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.7911 26.2267L26.0467 20.7311C26.3237 20.537 26.4622 20.2933 26.4622 20C26.4622 19.7067 26.3237 19.463 26.0467 19.2689L17.7911 13.7733C17.477 13.5718 17.1689 13.5526 16.8667 13.7156C16.563 13.88 16.4111 14.1415 16.4111 14.5V25.5111C16.4111 25.8681 16.563 26.1274 16.8667 26.2889C17.1689 26.4504 17.477 26.4296 17.7911 26.2267ZM20.0067 40C17.2422 40 14.6422 39.4778 12.2067 38.4333C9.77259 37.3874 7.65481 35.9689 5.85333 34.1778C4.05185 32.3867 2.62593 30.2807 1.57556 27.86C0.525185 25.4393 0 22.8481 0 20.0867C0 18.9578 0.0925926 17.8437 0.277778 16.7444C0.462963 15.6437 0.726667 14.5474 1.06889 13.4556C1.16815 13.1489 1.36222 12.9296 1.65111 12.7978C1.94148 12.6644 2.22148 12.6607 2.49111 12.7867C2.78148 12.9126 2.98296 13.1341 3.09556 13.4511C3.20815 13.7681 3.21481 14.0852 3.11556 14.4022C2.84148 15.3207 2.6237 16.2489 2.46222 17.1867C2.30074 18.1244 2.22074 19.0622 2.22222 20C2.22222 24.963 3.94444 29.1667 7.38889 32.6111C10.8333 36.0555 15.037 37.7778 20 37.7778C24.963 37.7778 29.1667 36.0555 32.6111 32.6111C36.0556 29.1667 37.7778 24.963 37.7778 20C37.7778 15.037 36.0556 10.8333 32.6111 7.38889C29.1667 3.94444 24.963 2.22222 20 2.22222C19.0667 2.22222 18.1437 2.29407 17.2311 2.43778C16.3185 2.58148 15.4148 2.79704 14.52 3.08444C14.2044 3.18518 13.897 3.17407 13.5978 3.05111C13.2985 2.92815 13.0763 2.73185 12.9311 2.46222C12.7859 2.19259 12.777 1.91926 12.9044 1.64222C13.0304 1.36815 13.2333 1.18074 13.5133 1.08C14.5104 0.73037 15.5304 0.462963 16.5733 0.277778C17.6163 0.0925926 18.6756 0 19.7511 0C22.5452 0 25.1704 0.519259 27.6267 1.55778C30.083 2.5963 32.2259 4.02296 34.0556 5.83778C35.8852 7.65259 37.3333 9.77555 38.4 12.2067C39.4667 14.6378 40 17.2341 40 19.9956C40 22.757 39.4756 25.3563 38.4267 27.7933C37.3778 30.2304 35.9526 32.3481 34.1511 34.1467C32.3496 35.9452 30.2341 37.3711 27.8044 38.4244C25.3748 39.4778 22.7756 40.003 20.0067 40ZM6.49556 8.46222C5.96815 8.46222 5.50889 8.26592 5.11778 7.87333C4.72667 7.48222 4.53111 7.02296 4.53111 6.49555C4.53111 5.96815 4.72667 5.50889 5.11778 5.11778C5.50889 4.72667 5.96815 4.53111 6.49556 4.53111C7.02296 4.53111 7.48222 4.72667 7.87333 5.11778C8.26445 5.50889 8.46074 5.96815 8.46222 6.49555C8.4637 7.02296 8.26741 7.48222 7.87333 7.87333C7.47926 8.26444 7.02 8.46074 6.49556 8.46222ZM6.66667 20C6.66667 16.2963 7.96296 13.1481 10.5556 10.5556C13.1481 7.96296 16.2963 6.66666 20 6.66666C23.7037 6.66666 26.8519 7.96296 29.4444 10.5556C32.037 13.1481 33.3333 16.2963 33.3333 20C33.3333 23.7037 32.037 26.8518 29.4444 29.4444C26.8519 32.037 23.7037 33.3333 20 33.3333C16.2963 33.3333 13.1481 32.037 10.5556 29.4444C7.96296 26.8518 6.66667 23.7037 6.66667 20Z"
                                    fill="#26A967"
                                  />
                                </svg>
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="bottom-sec d-flex align-items-center justify-content-start"                      style={{ marginLeft: "17px" }}
                  >
                          <Link
                            to={`/starline/${data?.providerName
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            state={{ title: data?.providerName, id: data._id }}
                            className="chat-btn"
                            style={{ textDecoration: "none" }}
                          >
                            <span>Pana Chart</span>
                          </Link>
                        </div>
                  <div
                    class="result__time d-flex"
                    style={{ justifyContent: "space-around",  }}
                  >
                    <span>
                      Open Bids &nbsp;
                      <strong>
                        {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.OBT}
                      </strong>
                    </span>
                    <span>
                      Close Bids &nbsp;
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
