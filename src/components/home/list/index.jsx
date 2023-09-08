import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "../../../localaxios";

const List = ({ title, isPoster , fetchURl}) => {
  const [movie , setMovie] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(fetchURl);
        setMovie(request.data.results);
        return request;
      }

      fetchData();
  },[fetchURl])
  return (
    <div className="list">
      <h2>{title}</h2>
      <div className="list-posters">

        {
          movie.map((film)=>{
            return <div className={`poster ${isPoster && "thumbnail"}`}>
            <img
              src={`${base_URL}${isPoster ? film.poster_path : film.backdrop_path
              }`}
              alt=""
            />
          </div>
          })
        }
        {/* <div className={`poster ${isPoster && "thumbnail"}`}>
          <img
            src="https://image.tmdb.org/t/p/original//aEVYGOIrhWDrNoZxVhhSazmRjeR.jpg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default List;
