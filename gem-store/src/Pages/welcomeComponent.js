import React from "react";
import "../Styles/welcomeComponent";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to GemStore!</h1>
        <p>The home for a fashionista</p>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default WelcomeComponent;
