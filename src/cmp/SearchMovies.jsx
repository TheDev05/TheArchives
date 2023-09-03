import React, { useEffect, useState } from "react";
import marvel_logo from "../assests/Marvel_Logo.png";
import style from "./SearchMovies.module.css";

import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const source =
    "https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=10&columns=imdb_id%2Cdirected_by%2Ctrailer_url%2Ccover_url%2Coverview%2Cduration%2Cbox_office%2Crelease_date%2Ctitle&order=chronology%2CDESC&filter=title%3D";

  let [API, setAPI] = useState(source);

  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((response) => response.json())
      // .then((json) => console.log(json.data.length))
      .then((data) => setRecords(data.data))
      .catch((error) => console.log(error));

    setLoading(false);
  }, [API]);

  const trigger = () => {
    setAPI(source + query);
    // console.log(API);
    setQuery("");
  };

  return (
    <div className={style.context}>
      <div className={style.search_card}>
        <img className={style.marvel_logo} src={marvel_logo} alt="" />
        <input
          type="text"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => {
            // console.log(e.target.value);
            setQuery(e.target.value);
          }}
          name=""
          id=""
        />

        <button onClick={trigger}>Search</button>
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <div className={style.movies_box}>
          <div className={style.movies_list}>
            {records &&
              records.map((item, key) => (
                <MovieCard values={item} index={key} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
