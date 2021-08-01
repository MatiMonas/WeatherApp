import React from "react";
import Card from "./Card";
import style from "./styles/Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  let aux = [...cities.slice(0, cities.length - 1)];
  if (aux) {
    return (
      <div className={style.container}>
        {/* Por cada ciudad que tenga que me genere un componente card */}
        {aux?.map((city) => (
          <Card
            temp={city.temp}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={onClose}
            key={city.id + city.name}
            id={city.id}
          />
        ))}
      </div>
    );
  }
}
