// const input = {
//   "17/06/2024 to 23/06/2024": [
//     ["167", "40", "145"],
//     ["440", "88", "567"],
//     ["459", "89", "135"],
//     ["356", "41", "560"],
//     ["578", "06", "150"],
//     ["240", "69", "469"],
//     ["224", "84", "239"],
//   ],
//   "24/06/2024 to 30/06/2024": [
//     ["450", "90", "235"],
//     ["369", "82", "688"],
//     ["155", "15", "140"],
//     ["249", "50", "280"],
//     ["699", "48", "134"],
//     ["558", "82", "110"],
//     ["178", "68", "477"],
//   ],
//   "01/07/2024 to 07/07/2024": [
//     ["122", "57", "278"],
//     ["129", "24", "338"],
//     ["470", "19", "126"],
//     ["446", "41", "290"],
//     ["488", "02", "679"],
//     ["889", "50", "226"],
//     ["113", "50", "677"],
//   ],
//   "08/07/2024 to 14/07/2024": [
//     ["579", "15", "339"],
//     ["266", "40", "370"],
//     ["150", "68", "990"],
//     ["770", "42", "156"],
//     ["689", "35", "357"],
//     ["458", "67", "124"],
//     ["490", "37", "368"],
//   ],
// };

export const extractTwoDigitNumbers = (input) => {
  const result = [];
  let idCounter = 1;

  for (const dateRange in input) {
    const weekData = input[dateRange];
    const weekResult = [];

    console.log("dateRange", weekData);
    for (const date in weekData) {

      weekData[date].forEach((num) => {
        const strNum = num.toString().padStart(2, "0");
        if (strNum.length === 2) {
          weekResult.push({ id: idCounter++, value: strNum });
        }
      });
      // });
    }

    if (weekResult.length > 0) {
      result.push(weekResult);
    }
  }

  return result;
};

// const output = extractTwoDigitNumbers(input);
// console.log(output);

// export const extractTwoDigitNumbers = (input) => {
//   const result = [];

//   for (const dateRange in input) {
//     const twoDigitArray = [];
//     let idCounter = 1;

//     console.log("dateRange", dateRange);

//   //   input[dateRange].forEach((subArray) => {
//   //     subArray.forEach((num) => {
//   //       if (num.length === 2) {
//   //         twoDigitArray.push({ id: idCounter++, value: num.toString() });
//   //       }
//   //     });
//   //   });

//   //   if (twoDigitArray.length > 0) {
//   //     result.push(twoDigitArray);
//   //   }
//   }

//   return result;
// };

// export const extractTwoDigitNumbers = (input) => {
//   const result = [];
//   let idCounter = 1;

//   for (const weekRange in input) {
//     const weekData = input[weekRange];
//     for (const date in weekData) {
//       const numbersArray = weekData[date];
//       // console.log(`Date: ${date}, Numbers: ${numbersArray}`);

//       // console.log(numbersArray, "numbersArray");

//       numbersArray.forEach((num) => {
//         const strNum = num.toString();
//         if (strNum.length === 2) {
//           result.push({ id: idCounter++, value: strNum });
//         }
//       });

//       // console.log(
//       //   "weekData",
//       //   numbersArray.forEach((num) => {
//       //     console.log("num", num);

//       //     const strNum = num.toString();
//       //     if (strNum.length === 2) {
//       //       result.push({ id: idCounter++, value: strNum });
//       //     }
//       //   })
//       // );
//     }
//   }
//   console.log("num", result);

//   return result;
// };

// const twoDigitNumberArrays = extractTwoDigitNumbers(input);

// console.log(JSON.stringify(twoDigitNumberArrays, null, 2));
