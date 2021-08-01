import React from "react";
import style from "./styles/Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${style.card} ${props.primary ? style.primary : ""}`}>
      <div className={style.container}>
        {props.primary ? (
          <>
            <button
              className={style.button}
              onClick={() => props.onClose(props.name)}
            >
              x
            </button>

            <Link to={`/ciudad/${props.id}`}>
              <h1>{props.name}</h1>
            </Link>
            <div className={style.status}>
              <div className={style.mainTemp}>
                <h3 className={style.weather}>{props.weather}</h3>
                <img
                  className={style.img}
                  src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
                  alt=""
                />
                <div className={style.nowTemp}>
                  <h3>{props.temp}°</h3>
                  <h6>Feels like {props.feels_like}°</h6>
                </div>
              </div>

              <div className={style.tempContainer}>
                <div className={style.temps}>
                  <h6>Min </h6>
                  <h6>{props.min}°</h6>
                </div>
                <div className={style.temps}>
                  <h6>Max </h6>
                  <h6>{props.max}°</h6>
                </div>
                <div className={style.temps}>
                  <h6>Humidity </h6>
                  <h6>{props.humidity}%</h6>
                </div>
                <div className={style.temps}>
                  <h6>Pressure </h6>
                  <h6>{props.pressure} hPa</h6>
                </div>
                <div className={`${style.temps} ${style.wind}`}>
                  <h6>Wind</h6>
                  <h6>{props.wind} km/h</h6>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              className={style.button}
              onClick={() => props.onClose(props.name)}
            >
              x
            </button>
            <Link to={`/ciudad/${props.id}`}>
              <h4>{props.name}</h4>
            </Link>
            <p>{props.weather}</p>
            <img
              src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
              alt=""
            />
            <p>{props.temp}°</p>
            <div className={style.temps}>
              <div className={style.minMax}>
                <p>Min {props.min}°</p>
              </div>
              <div className={style.minMax}>
                <p>Max {props.max}°</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
