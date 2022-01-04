import React from "react";
import "./Home.css";
import image from "../../asset/iamges.png";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="fluid-container conatainercolor">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={image} className="homeimage"/>
          </div>
        </div>
        <div className="row d-flex justify-content-center"
        >
            <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-3 d-grid gap-2 mt-3 mt-xxl-4">
               <a className="btn btn1 btn-sm">
                 <Link to="/depp" style={{textDecoration: "none",}} >
                   Enter APP
                   </Link>
                   </a>
            </div>
            <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-3 d-grid gap-2 mt-3 mt-xxl-4">
                <button className="btn btn1 btn-sm">Documentation</button>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2 className="homeh2">WOLF NODES</h2>
          </div>
          </div>
          <div className="row d-flex justify-content-center">
          <div className="col-xxl-7  col-lg-6 col-md-6 mt-3" >
            <p className="homep" >Gain passive income for life by leveraging $<span style={{color: "#fae423"}}>WOLF</span>'s Financial multi-chain yield-farming protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
