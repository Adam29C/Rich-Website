import { nameRejext } from "./StringRejex";
import { fa_time, formatDate } from "./getWeekDays";

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
        weekStartDay: formatDate(weekData.startDate),
        weekEndDay: formatDate(weekData.endDate),
        data: [],
      };

      let currentResultDate = "";
      let relatedData = [];

      weekData.data.forEach((item) => {
        if (
          item.resultDate !== currentResultDate &&
          item.winningDigit !== "test" &&
          item.winningDigitFamily !== "test"
        ) {
          if (currentResultDate !== "") {
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
