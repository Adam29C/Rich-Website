import React from "react";
import Chart_Container from "./Chart_Container";
import stars from "../../../RichImages/stars.svg";
const JodiChart = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="game-icons-img"
          style={{ height: "25px" }}
          src={stars}
          alt="#"
        />
        <h1
          class="mb-0 ms-2 me-2 rich-game-title"
          style={{ color: "#075358", fontSize: "28px",marginTop:15 }}
        >
          All Games Charts
        </h1>
        <img
          className="game-icons-img"
          style={{ height: "25px" }}
          src={stars}
          alt="#"
        />
      </div>
      <Chart_Container
        {...props}
        responsive_Class={"col-xxl-6 col-xl-6  col-md-6 "}
      />
    </>
  );
};

export default JodiChart;
