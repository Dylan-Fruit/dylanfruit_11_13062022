import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Cards from "../components/Cards";
import { NavLink } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <div className="homecontainer">
        <div className="homebanner">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
      <div className="lodgingcontainer">
        {data.map((lodging) => (
          <NavLink key={lodging.id} to={"/lodging/" + lodging.id}>
            <Cards cover={lodging.cover} title={lodging.title} />
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
