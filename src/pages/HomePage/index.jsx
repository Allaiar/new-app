import React from "react";
import Header from "../../components/Header/index";
import Animals from "../../components/Animals";
import AnimalItem from "../AnimalItem";
function HomePage(props) {
  return (
    <div>
      <Header/>
      <Animals/>
      <AnimalItem/>
    </div>
  );
}

export default HomePage;