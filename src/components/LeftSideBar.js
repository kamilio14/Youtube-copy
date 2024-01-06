import React from "react";

export default function LeftSideBar() {
  return (
    <div className="left-side-bar">
      <div className="home">
        <i className="fa-solid fa-house icons"></i>
        <h3>Home</h3>
      </div>
      <div className="shorts">
        <i className="fa-solid fa-play icons"></i>
        <h3>Shorts</h3>
      </div>
      <div className="odbery">
        <i className="fa-solid fa-circle-play icons"></i>
        <h3>Odbery</h3>
      </div>
    </div>
  );
}
