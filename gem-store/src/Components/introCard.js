import React from "react";
import { Link } from "react-router-dom";

const IntroCard = ({ imgUrl, title, subtitle, next }) => {
  console.log("rendering Introcard component");
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <img src={imgUrl} alt="Intro" style={{ maxWidth: "300px" }} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={next}>
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Shopping now
        </button>
      </Link>
    </div>
  );
};

export default IntroCard;
