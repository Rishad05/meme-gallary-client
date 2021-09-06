
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



    const handleDelete = (id) => {

      fetch(`http://localhost:5000/deleteMeme/${id}`, {
          method : "DELETE"
      })
      .then(res => res.json())
      .then(data=>{
          if(data){
            deleteMeme ();
              alert('Meme Deleted Successfully')
          }
      })
  }
  const deleteMeme  = () =>{
      fetch(`http://localhost:5000/allMeme`)
      .then(res =>res.json())
      .then(data => setShowMeme(data))
     }
    return (
        <div className="container p-5">
      <div className="gallery ">
        {showMeme.map((meme ) =>
          <div className='pics'>
              {/* <LazyLoadImage effect="blur" width="100%"  src={meme.imageUrl} key={meme.id}  alt=""> */}
              <img src={meme.imageUrl} key={meme.id} style={{width: '100%'}} alt="" />
              <img src={meme.link} key={meme.id} style={{width: '100%'}} alt="" />
              {/* </LazyLoadImage> */}
              {/* <LazyLoadImage
                effect="blur"
                width="100%"
                src={meme.imageUrl}
                key={meme.id}
                alt=""
               
              ></LazyLoadImage> */}
             {/* <button  onClick={() => handleDelete(meme._id)} className="fw-bold btn btn-danger">Delete </button> */}
             
         
          </div>
         
        )}
         
      </div>
    </div>
    );
};

export default MemeGallary;