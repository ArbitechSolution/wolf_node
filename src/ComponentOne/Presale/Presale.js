import React from "react";
import busd from "../../asset/busd.png";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaGreaterThan } from "react-icons/fa";
import "./Presale.css";
import climb from "../../asset/climb.png";

function presale() {
  return (
    <div className="fluid-container conatainercolor">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2 className="presaleh2">WOLF NODES</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-xxl-7 col-lg-6 col-md-6 mt-3">
            <p className="homep">Buy $ Cair Node with BUSD</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <InputGroup>
              <InputGroup.Text
                style={{
                  backgroundColor: "#112c70",
                  border: "2px solid #112c70",
                }}
              >
                <img src={busd} width="80px" />
              </InputGroup.Text>
              <FormControl
                aria-label="First name"
                style={{ border: "2px solid #112c70" }}
              />
            </InputGroup>
          </div>
          <div className="col-md-1">
            {" "}
            <FaGreaterThan size={55} className="inputid" />
          </div>
          <div className="col-md-4">
            <InputGroup>
              <InputGroup.Text
                style={{
                  backgroundColor: "#112c70",
                  border: "2px solid #112c70",
                }}
              >
                <img src={climb} width="37px" />
              </InputGroup.Text>
              <FormControl
                aria-label="First name"
                style={{ border: "2px solid #112c70" }}
              />
            </InputGroup>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-2">
            <div class="d-grid gap-2">
              <button class="btn btn3 btn-sm" type="button">
                SWAP
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4" >
          <div className="col-md-12">
            <p className="homep">BUSD contributed</p>

          </div>
        </div>
        <div className="row d-flex justify-content-center" >
          <div className="col-md-4 col-11  box" ></div>
          
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-md-4 d-flex justify-content-between">
              <span id="presalespan">0 BUSD</span>
              <span id="presalespan">150000 BUSD</span>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default presale;
