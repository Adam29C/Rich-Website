const input = {
  "17/06/2024 to 23/06/2024": [
    ["167", "40", "145"],
    ["440", "88", "567"],
    ["459", "89", "135"],
    ["356", "41", "560"],
    ["578", "06", "150"],
    ["240", "69", "469"],
    ["224", "84", "239"],
  ],
  "24/06/2024 to 30/06/2024": [
    ["450", "90", "235"],
    ["369", "82", "688"],
    ["155", "15", "140"],
    ["249", "50", "280"],
    ["699", "48", "134"],
    ["558", "82", "110"],
    ["178", "68", "477"],
  ],
  "01/07/2024 to 07/07/2024": [
    ["122", "57", "278"],
    ["129", "24", "338"],
    ["470", "19", "126"],
    ["446", "41", "290"],
    ["488", "02", "679"],
    ["889", "50", "226"],
    ["113", "50", "677"],
  ],
  "08/07/2024 to 14/07/2024": [
    ["579", "15", "339"],
    ["266", "40", "370"],
    ["150", "68", "990"],
    ["770", "42", "156"],
    ["689", "35", "357"],
    ["458", "67", "124"],
    ["490", "37", "368"],
  ],
};

export const extractTwoDigitNumbers = (input) => {
  const result = [];

  for (const dateRange in input) {
    const twoDigitArray = [];
    let idCounter = 1;

    input[dateRange].forEach((subArray) => {
      subArray.forEach((num) => {
        if (num.length === 2) {
          twoDigitArray.push({ id: idCounter++, value: num.toString() });
        }
      });
    });

    if (twoDigitArray.length > 0) {
      result.push(twoDigitArray); 
    }
  }

  return result;
};

// const twoDigitNumberArrays = extractTwoDigitNumbers(input);

// console.log(JSON.stringify(twoDigitNumberArrays, null, 2));
