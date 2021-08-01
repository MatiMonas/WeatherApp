import fetchData from "./fetch";

const apiKey = process.env.REACT_APP_API_KEY;

export default function fetchCity(ciudad, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => {
        if (oldCities.some((c) => c.name === city.name)) {
          return oldCities;
        } else {
          return [...oldCities, city];
        }
      });
    } else {
      alert("Ciudad no encontrada");
    }
  });
}
