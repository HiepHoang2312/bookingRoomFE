import React from "react";
import "./banner.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import banner1 from "../../../../assests/banner/1.jpg";
import banner2 from "../../../../assests/banner/2.jpg";
function Banner(props) {
  return (
    <div id="banner">
      <Carousel autoplay effect="fade">
        <div className="fit">
          <img src={banner1} alt="" />
        </div>
        <div className="fit">
          <img src={banner2} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
