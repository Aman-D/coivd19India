import React from "react";
import "./video.style.scss";

const Video = () => (
  <div className="video-container">
    <h2 className="video-title">
      Information about COVID19 and Saftey Measurements
    </h2>
    <div className="videos">
      <div className="iframe-container">
        <iframe
          width="500"
          height="305"
          src="https://www.youtube.com/embed/5DGwOJXSxqg"
          frameborder="5"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          marginHeight="20"
          marginWidth="20"
        ></iframe>
      </div>
      <div className="iframe-container">
        <iframe
          width="500"
          height="305"
          src="https://www.youtube.com/embed/9Ay4u7OYOhA"
          frameborder="5"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
);
export default Video;
