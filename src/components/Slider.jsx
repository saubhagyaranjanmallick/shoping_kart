import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner from "../assets/Images/Banner.png";
import Banner2 from "../assets/Images/Banner2.png";
import Banner3 from "../assets/Images/Banner3.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "580px",
};
const slideImages = [
  {
    url: Banner3,
    caption: "Slide 1",
  },
  {
    url: Banner,
    caption: "Slide 2",
  },
  {
    url: Banner2,
    caption: "Slide 2",
  },
];
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
