import React, { useEffect, useState } from "react";
import axios from "../../../localaxios";
import "./style.scss";
import userRequests from "../../../Request";

const Hero = () => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(userRequests.fetchHorrorMovies);
      console.log(request.data.results);
      setMovieDetail(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}")`,
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h2 className="title">{movieDetail?.name || movieDetail?.title || movieDetail?.originalName}</h2>
        <div className="hero-buttons">
          <button>Play Now</button>
          <button>Watch Trailer</button>
        </div>
        <div className="hero-description">
          {movieDetail?.overview}
        </div>
      </div>
    </div>
  );
};

export default Hero;
