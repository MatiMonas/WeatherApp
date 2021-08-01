import React, { useState } from "react";
import "./App.css";
import Cards from "../components/Cards.jsx";
import Card from "../components/Card.jsx";
import fetchCity from "../services/fetchCity";
import Nav from "../components/Nav.jsx";
import About from "../components/About.jsx";
import { Route } from "react-router-dom";
import Ciudad from "../components/Ciudad.jsx";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetchCity(city, setCities);
  }

  function onClose(idCity) {
    setCities((oldCities) => oldCities.filter((c) => c.name !== idCity));
  }

  function onFilter(cityId) {
    let city = cities.find((c) => c.id === parseInt(cityId));
    return city;
  }

  function onSelect(cityId) {
    setCities((cities) => {
      const index = cities.map((city) => city.id).indexOf(cityId);
      return [
        cities[index],
        ...cities.slice(1, index),
        cities[0],
        ...cities[0],
        ...cities.slice[index + 1],
      ];
    });
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />

      <Route
        exact
        path="/"
        render={() => (
          <>
            <div className="main-container">
              <div className="card-container">
                {cities.length > 0 && (
                  <Card
                    primary
                    temp={cities[cities.length - 1].temp}
                    max={cities[cities.length - 1].max}
                    min={cities[cities.length - 1].min}
                    name={cities[cities.length - 1].name}
                    img={cities[cities.length - 1].img}
                    wind={cities[cities.length - 1].wind}
                    weather={cities[cities.length - 1].weather}
                    clouds={cities[cities.length - 1].clouds}
                    latitud={cities[cities.length - 1].latitud}
                    longitud={cities[cities.length - 1].longitud}
                    id={cities[cities.length - 1].id}
                    pressure={cities[cities.length - 1].pressure}
                    humidity={cities[cities.length - 1].humidity}
                    feels_like={cities[cities.length - 1].feels_like}
                    onClose={onClose}
                  />
                )}

                <Cards
                  className="item"
                  cities={cities}
                  onClick={onSelect}
                  onClose={onClose}
                />
              </div>
            </div>
          </>
        )}
      />
      <Route
        exact
        path={`/ciudad/:ciudadId`}
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;
