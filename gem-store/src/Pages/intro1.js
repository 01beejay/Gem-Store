import React from "react";
//import { Link } from "react-router-dom";
import IntroCard from "../Components/introCard";

const Intro1 = () => (
  <IntroCard
    imgUrl="https://via.placeholder.com/300x400" // Use your own image URL
    title="Discover something new"
    subtitle="Special new arrivals just for you"
    next="/intro2"
  />
);

export default Intro1;
