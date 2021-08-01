import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import style from "./styles/SearchBar.module.css";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");
  // acá va tu código

  const handleOnSearch = () => {
    props.onSearch(search);
    setSearch("");
  };

  return (
    <div className={style.container}>
      <form
        onSubmit={(e) => {
          //prevent default para que no se mande el formulario
          e.preventDefault();

          //lo que le estoy pasando a mi onSearch como propiedad es lo que escribo en mi input de busqueda
        }}
      >
        <input
          //onChange para que cada vez que algo se esta escribiendo en el input guarde el valor en mi estado
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          placeholder=" "
          value={search}
          id="search"
          className={style.searchBar}
        />
        <label htmlFor="search">Add city</label>
        <Link to="/">
          <button className={style.button} onClick={handleOnSearch}>
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
