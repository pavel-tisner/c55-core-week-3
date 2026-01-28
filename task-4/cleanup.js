const getReportName = (cityName) => {
  return `Weather Report for ${cityName}`;
};

const getTempCelsius = (tempCelsius) => {
  return `Temperature: ${tempCelsius} °C`;
};

const getTempFahrenheit = (tempCelsius) => {
  const tempFahrenheit = (tempCelsius * 9) / 5 + 32;
  return `Temperature: ${tempFahrenheit} °F`;
};

const getTempKelvin = (tempCelsius) => {
  const tempKelvin = tempCelsius + 273.15;
  return `Temperature: ${tempKelvin} K`;
};

const getTempStatus = (tempCelsius) => {
  if (tempCelsius < 0) {
    return "Status: Freezing";
  } else if (tempCelsius >= 0 && tempCelsius < 10) {
    return "Status: Cold";
  } else if (tempCelsius >= 10 && tempCelsius < 20) {
    return "Status: Mild";
  } else if (tempCelsius >= 20 && tempCelsius < 30) {
    return "Status: Warm";
  } else {
    return "Status: Hot";
  }
};

const getWindChill = (tempCelsius, windSpeed) => {
  return (
    13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16)
  );
};

const getWindReport = (cityName, tempCelsius, windSpeed) => {
  return `Wind chill in ${cityName}: ${getWindChill(tempCelsius, windSpeed).toFixed(2)} °C`;
};
const weatherReport = (cityName, tempCelsius, windSpeed) => {
  return `${getReportName(cityName)}
${getTempCelsius(tempCelsius)}
${getTempFahrenheit(tempCelsius)}
${getTempKelvin(tempCelsius)}
${getTempStatus(tempCelsius)}
${getWindReport(cityName, tempCelsius, windSpeed)}
`;
};
console.log(weatherReport("Amsterdam", 22, 15));
console.log(weatherReport("Berlin", 15, 20));
console.log(weatherReport("Copenhagen", -5, 25));
console.log(weatherReport("Montevideo", 18, 20));
console.log(weatherReport("Bangkok", 37, 1));