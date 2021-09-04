import React, { useEffect } from 'react';
import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './MemeGallary.css'

const MemeGallary = () => {
    const [showMeme, setShowMeme] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/allMeme')
        .then(res => res.json())
        .then(data => setShowMeme(data))
    }, [])
    return (
        <div className="container p-5">
      <div className="row m-0">
        {showMeme.map((meme) =>
          <div className="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center">
          
              <LazyLoadImage
                effect="blur"
                height="300px"
                width="250px"
                src={meme.file}
                key={meme.id}
                alt=""
                className="image-hover p-3"
              ></LazyLoadImage>
         
          </div>
        )}
      </div>
    </div>
    );
};

export default MemeGallary;