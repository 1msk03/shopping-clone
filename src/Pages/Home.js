import React from "react";
import "./Stylesheets/Home.css";
// import homeImage from "./Photos/Home/home1.jpg";
import homeImage1 from "./Photos/Home/home1.jpg";
import List from "./List";

const Home = () => {
  return (
    <div className="home__container">
      {/* <div className="home__container-first">
        <img src={homeImage1} alt="banner" />
      </div> */}
      <List />
    </div>
  );
};

export default Home;
