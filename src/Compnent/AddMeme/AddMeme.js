import axios from "axios";
import React, { useState } from "react";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const memeData = {
      imageUrl: imageUrl,
      link: e.target.link.value,
    };
    try {
      const res = await axios.post("http://localhost:5000/addMeme", memeData);
      if (res) {
        e.target.reset();
        alert("Image Upload successfully");
      }
    } catch (error) {
      console.error(error);
      console.log(memeData);
    }
  };
  return (
    <section>
      <form class="row  ml-5 p-3" onSubmit={handleSubmit}>
        <div className="col-md-3 mb-2 ">
          <input
            type="text"
            name="link"
            required
            onBlur={handleBlur}
            class="form-control"
            placeholder="Add Meme By link ...."
          />
        </div>
        <div className="col-md-3 d-flex align-items-center mb-2">
          <button type="Submit" className="btn btn-outline-success">
            AddMeme
          </button>
        </div>
        <div className="col-md-3 mb-2">
          <input
            class="form-control"
            onChange={handleImageUpload}
            type="file"
            name="image"
          />
        </div>
        <div className="col-md-3 d-flex align-items-center mb-2">
          <button type="Submit" className="btn btn-outline-success">
            Upload
          </button>
          <br />
        </div>
      </form>
      <div className="container">
        <a className="btn btn-outline-danger" href="/deleteMeme">
          Manage Meme
        </a>
      </div>
    </section>
  );
};

export default AddMeme;
