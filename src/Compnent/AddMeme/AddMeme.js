import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AddMeme.css';

const AddMeme = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [meme, setMeme] = useState({});
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
  const handleBlur = (e) => {
    const newInfo = { ...meme };
    newInfo[e.target.name] = e.target.value;
    setMeme(newInfo);
  };
  const handleSubmitUpload = async (e) => {
    e.preventDefault();
    const memeData = {
      imageUrl: imageUrl,
    };
    try {
      const res = await axios.post("https://mysterious-falls-27814.herokuapp.com/addMeme", memeData);
      if (res) {
        e.target.reset();
        alert("Image Upload successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitLink = async (e) => {
    e.preventDefault();
    const memeData = {
      link: e.target.link.value,
    };
    try {
      const res = await axios.post("https://mysterious-falls-27814.herokuapp.com/addMeme", memeData);
      if (res) {
        e.target.reset();
        alert("Image Upload successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="container">
      <Link className="d-flex justify-content-center fw-bolder mb-2 stats " to="/chart"> See Stat</Link>
      <div className="row d-flex justify-content-between">
        <form className="col-md-5 d-flex mb-2 " onSubmit={handleSubmitLink}>
          <div className="w-75">
            <input
              type="text"
              name="link"
              class="form-control"
              required
              onBlur={handleBlur}
              placeholder="Add Meme By link ...."
            />
          </div>
          <div className="w-30">
            <button type="Submit" className="btn btn-outline-success ">
              AddMeme
            </button>
          </div>
        </form>
          
        <form className="col-md-5 d-flex mb-2" onSubmit={handleSubmitUpload}>
          <div className="w-75">
            <input
              class="form-control"
              onChange={handleImageUpload}
              type="file"
              name="image"
              required
            />
          </div>
          <div className="mb-3 w-30">
            <button type="Submit" className="btn btn-outline-success">
              Upload
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center">
          <a className="btn btn-outline-danger" href="/deleteMeme">
            Manage Meme
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddMeme;
