const getDay = (format, first, second) => {
  return format === "DMY" ? first : second;
};

const getMonth = (format, first, second) => {
  return format === "DMY" ? second : first;
};

const getYear = (year) => year;

const parseDateString = (dateString) => {
  const [format, date] = dateString.split(" ");
  const [first, second, year] = date.split("-").map((el) => +el);

  return {
    day: getDay(format, first, second),
    month: getMonth(format, first, second),
    year: getYear(year),
  };
};

console.log(parseDateString("MDY 10-21-1983")); // Output: { day: 21, month: 10, year: 1983 }
console.log(parseDateString("DMY 21-10-1983")); // Output: { day: 21, month: 10, year: 1983 }
console.log(parseDateString("MDY 03-15-2024")); // Output: { day: 15, month: 3, year: 2024 }
console.log(parseDateString("DMY 15-03-2024")); // Output: { day: 15, month: 3, year: 2024 }
