import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import List from "./list";
import userRequests from "../../Request";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero/>
      <List title="Netflix Originals" isPoster fetchURl={userRequests.fetchNetflixOriginals}/>
      <List title="Trending Now" fetchURl={userRequests.fetchTrending}/>
      <List title="Comedy Movies" fetchURl={userRequests.fetchComedyMovies}/>
      <List title="Horror Movies" fetchURl={userRequests.fetchHorrorMovies}/>
      <List title="Thiller Movies" fetchURl={userRequests.fetchThillerMovies}/>
      <List title="Thiller Movies" fetchURl={userRequests.fetchThillerMovies}/>
      <List title="Netflix Originals" isPoster fetchURl={userRequests.fetchNetflixOriginals}/>
    </div>
  );
};

export default Home;
