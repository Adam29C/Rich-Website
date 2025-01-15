import React, { useEffect, useState } from "react";
import "../../assets/css/Section4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GET_ALL_GAMES } from "../../service/admin.service";
import ReusableCard from "../ReusableCard";
const AvailableGames = () => {

  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMES();
    if (res.status) {
      setgetData(res.data);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div>
    

      <ReusableCard
        GameData={getData}
        title="AVAILABLE GAMES"
        showPana={true}
      />
    </div>
  );
};

export default AvailableGames;
