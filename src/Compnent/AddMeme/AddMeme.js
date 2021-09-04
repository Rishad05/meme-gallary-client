import axios from 'axios';
import React, { useState } from 'react';

const AddMeme = () => {
    // const [info, setInfo] = useState({})
    
    const [imageUrl, setImageUrl] = useState(null)

    // const handleBlur = e =>{
    //     const newInfo = {...info}
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }
    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set("key", "3957c845bd9689113743363c6a2f614f");
        imageData.append("image", e.target.files[0]);
    
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', imageUrl)
       


        fetch('http://localhost:5000/addMeme', {
            method: 'POST',
            body: formData
        })
       
        .then(res => {
           
           
            if(res){
                e.target.reset();
                alert('Meme added successfully')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <section className="row">
            <div className="col-md-5">
                <input type="text" />
            </div>
            <div className="col-md-5">
            <form class="row g-3" onSubmit={handleSubmit}>
                      
                      <div className="col-md-6">
                          <input class="form-control" onChange={handleImageUpload}  type="file" name="image"  />
                      </div>
                      <div className="col-md-6 d-flex align-items-center">
                          <button type="Submit" className="btn btn-primary">Upload</button>
                          {/* <input type="Submit" className=" btn btn-success" /> */}
                      </div>
          </form>
            </div>
        </section>
    );
};

export default AddMeme;