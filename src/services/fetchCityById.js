import fetchData from "./fetch";

const apiKey = process.env.REACT_APP_API_KEY;

export default function fetchCityById(id, setData) {
  console.log(process.env);
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData(city);
    } else {
      setData(null);
    }
  });
}
