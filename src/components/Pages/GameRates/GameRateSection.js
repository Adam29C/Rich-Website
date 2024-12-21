import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import doller from "../../../RichImages/money-bag_13932790 (1) 1.png";

const GameRateSection = () => {
  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMERATES();
    setgetData(res.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div className="container">
    

      <div className="game-rate-container">
        <div className="cust-m d-flex flex-column text-center justify-content-center align-items-center">
   <div className="d-flex justify-content-center align-items-center">
           <img className="game-icons-img" src={doller} alt="#" />
           <h1 class="mb-0 ms-2 me-2 rich-game-title">Game Rate</h1>
            <img className="game-icons-img" src={doller} alt="#" />
   </div>
          <p className="rich-game-title-text">
            We Have Best Game Rates in market
          </p>
         
        </div>

        <div className="row">
          {getData?.map((items, index) => (
            <div
              key={index}
              className="Card_Size game-rate-card-cust"
             
            >
           
                <h1 className="rich-text-color">{items.gameName}</h1>
             
                <h2 className="">
                  1 RS KA {items.gamePrice}
                </h2>
          
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default GameRateSection;
