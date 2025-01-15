import { useEffect, useState } from "react";
import { allJackpot } from "./Chart.config";
import { GET_ALL_JACKPOT_JODI_CHART } from "../../service/admin.service";
import { redJodi } from "../JodiCharts/Chart.config";
import { fa_time } from "../../Helpers/getWeekDays";

const ShreeDay = () => {
  const [chartData, setchartData] = useState([]);

  const getData = async () => {
    const req = "";
    const res = await GET_ALL_JACKPOT_JODI_CHART();
    setchartData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="cc">Date</th>
            <th className="cc">10:30 AM</th>
            <th className="cc">11:30 AM</th>
            <th className="cc">12:30 PM</th>
            <th className="cc">01:30 PM</th>
            <th className="cc">02:30 PM</th>
            <th className="cc">03:30 PM</th>
            <th className="cc">04:30 PM</th>
            <th className="cc">05:30 PM</th>
            <th className="cc">06:30 PM</th>
            <th className="cc">07:30 PM</th>
            <th className="cc">08:30 PM</th>
            <th className="cc">09:30 PM</th>
          </tr>
        </thead>
        <tbody>
          {/* {allJackpot.map((group, groupIndex) => (
            <tr>
              {Object.entries(group).map(([day, values], id) => (
                <>
                  <td key={id}>{day}</td>
                  {values.map((item, index) => (
                    <td key={index} className="cc">
                      {item}
                    </td>
                  ))}
                </>
              ))}
            </tr>
          ))} */}
          {chartData.data &&
            chartData.data.map((item1 , index) => (
              <tr key={item1}>

                <td key={index}>{fa_time(item1.resultDate)}</td>
                {item1.results.map((nestedItem, index) => (
                  <td key={index} className="cc">
                    <div className="kalyan-chart-number-black">
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(nestedItem.winningDigit))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {nestedItem && nestedItem.winningDigit}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShreeDay;
