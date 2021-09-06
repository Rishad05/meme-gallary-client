import React, { useEffect } from "react";
import { useState } from "react";
import "./MemeGallary.css";

const MemeGallary = () => {
  const [showMeme, setShowMeme] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-falls-27814.herokuapp.com/allMeme")
      .then((res) => res.json())
      .then((data) => setShowMeme(data));
  }, []);
  return (
    <div className="container p-5">
      <div className="gallery ">
        {showMeme.map((meme) => (
          <div className="pics">
            <img
              src={meme.imageUrl}
              key={meme.id}
              style={{ width: "100%" }}
              alt=""
            />
            <img
              src={meme.link}
              key={meme.id}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGallary;
