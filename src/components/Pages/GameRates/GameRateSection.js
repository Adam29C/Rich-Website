import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import stars from "../../../RichImages/stars.svg";

const GameRateSection = () => {
  const [getData, setgetData] = useState([]);


  console.log("getData", getData);
  

  const getResponseData = async () => {
    const res = await GET_ALL_GAMERATES();

    const triplePana = {
      _id: "677b81a7d31824691abfffe2",
      gameName: "Triple Pana",
      gamePrice: 600,
      modifiedAt: "2025-01-08 13:10:27",
    };

    const index = res.data.findIndex((item) => item.gameName === "Double Pana");
    if (index !== -1) {
      res.data.splice(index + 1, 0, triplePana);
    }


    const uniqueData = res.data.filter((item, index, self) =>
      index === self.findIndex(t => t.gameName === item.gameName)
    );
    setgetData(uniqueData);

    console.log("Game Rates", uniqueData);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div className="container">
      <div className="game-rate-container">
        <div className="cust-m d-flex flex-column text-center justify-content-center align-items-center">
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
              Game Rate
            </h1>
            <img
              className="game-icons-img"
              style={{ height: "25px" }}
              src={stars}
              alt="#"
            />
          </div>
          <p className="rich-game-title-text" style={{ fontWeight: 600 }}>
            We Have Best Game Rates in market
          </p>
        </div>

        <div className="row">
          {getData?.map((items, index) => (
            <div key={index} className="Card_Size game-rate-card-cust">
              <h1 style={{ color: "black", fontWeight: 600 }}>
                {items.gameName}
              </h1>

              <h5 className="" style={{ color: "black", marginTop: "5px" }}>
                1 RS KA {items.gamePrice}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameRateSection;
