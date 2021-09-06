import React, { useEffect, useState } from "react";
import "./ManageMeme.css";
const ManageMeme = () => {
  const [showMeme, setShowMeme] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-falls-27814.herokuapp.com/allMeme")
      .then((res) => res.json())
      .then((data) => setShowMeme(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://mysterious-falls-27814.herokuapp.com/deleteMeme/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          deleteMeme();
          alert("Meme Deleted Successfully");
        }
      });
  };
  const deleteMeme = () => {
    fetch(`https://mysterious-falls-27814.herokuapp.com/allMeme`)
      .then((res) => res.json())
      .then((data) => setShowMeme(data));
  };
  return (
    <div className="fluid-container">
      <div className="col-md-10 p-4 mx-auto bg-color" >
        <h2 className="border-bottom mb-2 fw-bolder text-light text-center">
          MANAGE MEME
        </h2>
        <div className="col-md-12">
         <h4><a className="btn btn-outline-dark fw-bolder" href="/home"> Back to Home</a></h4>
          <table className="table table-sm table-info text-center table-bordered ">
            <thead>
              <tr>
                <th className="w-25">Image</th>
                <th className="w-25">Action</th>
              </tr>
            </thead>
            {showMeme.map((meme) => (
              <tbody className="bg-dark">
                <td className="w-25 text-light p-3">
                  <img
                    style={{ width: "8rem", height: "8rem" }}
                    src={meme.imageUrl || meme.link}
                    alt=""
                  />
                </td>
                <td className="p-5">
                  <button
                    className="mt-3 btn btn-outline-warning"
                    onClick={() => handleDelete(meme._id)}
                  >
                    Delete
                  </button>
                </td>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageMeme;
