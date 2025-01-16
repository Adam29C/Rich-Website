import { nameRejext } from "./StringRejex";
import { fa_time } from "./getWeekDays";

export const GetAllCharts = async (apiEndPOint, dataRequest) => {
  const title = nameRejext(dataRequest.title);

  const res = await apiEndPOint({ id: dataRequest.id, name: title });
  if (res.status) {
    const convertedData = {
      data: [],
    };

    let aa = res.data.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    res.data.forEach((weekData) => {
      const resultDates = aa.map((item) => new Date(item.resultDate));

      const week = {
        weekStartDay: fa_time(weekData.startDate),
        weekEndDay: fa_time(weekData.endDate),
        data: [],
      };

      let currentResultDate = "";
      let relatedData = [];

      weekData.data.forEach((item) => {
        if (item.resultDate !== currentResultDate) {
          if (currentResultDate !== "") {

            console.log("week.data" ,week.data);
            
            week.data.push({
              resultDate: currentResultDate,
              relatedData: relatedData,
            });
          }
          currentResultDate = item.resultDate;
          relatedData = [];
        }

        relatedData.push(item);
      });

      week.data.push({
        resultDate: currentResultDate,
        relatedData: relatedData,
      });

      convertedData.data.push(week);
    });

    return convertedData;
  }
};
