import React from "react";
import AddMeme from "../AddMeme/AddMeme";
import MemeGallary from "../MemeGallary/MemeGallary";

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-light header mb-3">
        <span class="navbar-text m-auto fw-bolder ">Meme Gallary</span>
      </nav>
      <AddMeme />
      <MemeGallary />
    </div>
  );
};
export default Home;
