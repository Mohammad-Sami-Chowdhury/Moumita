import React, { Component } from "react";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import Sectiontitle from "../section-title";
import "./style.css";

import galimg1 from "../../images/gal/gal1.png";
import galimg2 from "../../images/gal/gal2.png";
import galimg3 from "../../images/gal/gal3.png";
import galimg4 from "../../images/gal/gal4.png";
import galimg5 from "../../images/gal/gal5.png";
import galimg6 from "../../images/gal/gal6.png";

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding">
        <Sectiontitle section={"Our Gellary"} />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox  thumbnail={galimg1} image={galimg1} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox thumbnail={galimg2} image={galimg2} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox thumbnail={galimg3} image={galimg3} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox thumbnail={galimg4} image={galimg4} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox thumbnail={galimg5} image={galimg5} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox thumbnail={galimg6} image={galimg6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
