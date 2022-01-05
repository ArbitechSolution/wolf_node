import React from "react";
import "./Depp.css";
import { BsMenuButtonWide } from "react-icons/bs";
function Depp() {
  return (
    <div className="fluid-container">
      <div className="container mt-3">
        <div className="row depprow">
          <div className="col-lg-4 col-11 colbox  mb-3" >
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <BsMenuButtonWide size={24} id="reacticon" />
              </div>
              <div className="col-4 mt-2 text-start">
                <span className="deppp">0/100 Max</span>
                <p
                  className="deppp1"
                  style={{ color: "#b709d6", fontSize: "13px" }}
                >
                  My Nodes
                </p>
              </div>
              <div className="col-6">
                <a className="btn btn-outline" size="sm">
                  CREATE A NODE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-11 colbox  mb-3">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <i class="fas fa-network-wired fs-4"></i>
              </div>
              <div className="col-4 mt-2 text-start">
                <span className="deppp ">0</span>
                <p
                  className="deppp1"
                  style={{ color: "#ff9c12", fontSize: "13px" }}
                >
                  All Node
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-11 colbox  mb-3">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <i class="fal fa-usd-square"></i>
              </div>
              <div className="col-5 mt-2 text-start">
                <span className="deppp">0.0000 WALF</span>
                <p
                  className="deppp1"
                  style={{ color: "#0bff2b", fontSize: "13px" }}
                >
                  My Rewards
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-8 text-start" >
            <h2 style={{color: "white"}}>Welcome To WOLF</h2>
            <p style={{color: "white"}}>
              From this console, you can view,manage,and launch RING-nodes.You
              can also see how many rewards have been allocated, claim them
              here.Then if you want.You can use them to create more RING-nodes,
              up to a maximum of 100 per wallet.
            </p>
            <div className="d-grid gap-2 d-flex flex-row mb-3">
          <div className=" d-flex justify-content-start  ">
          <button className="btn btnBUY">BUY $RING</button>
          </div>
          <div className="d-flex justify-content-start  ms-md-4 ms-2">
          <button className="btn btnBUY1">DISCORD</button>
          </div>
          </div>
          </div>
         <div className="col-lg-4 mb-2  mt-md-4 ">
             <div className="row d-flex align-items-center pt-1 d-flex justify-content-center">
                 <div className="col-lg-12 col-11 colboxxes ps-sm-2 d-flex flex-row">
                 <div className="d-flex align-items-center"><i className="fal fa-info-square "></i>
                 </div>
                 <span id="depptext1" className="ms-2">Ensure are at https://app.ring.financial</span>
                 </div>
             </div>
             <div className="row text-start d-flex align-items-center pt-1  d-flex justify-content-center">
                 <div className="col-lg-12 col-11 colboxxes ps-sm-2 d-flex flex-row">
                 <div className="d-flex align-items-center"><i className="fal fa-info-square "></i>
                 </div>
                 <span id="depptext1" className="ms-2">Current reward: <span style={{ color: "#0bff2b" }}>0,75</span >  per GOLD node, per days</span>
                 </div>
             </div>
         </div>
        </div>

        <div className="row d-flex justify-content-center mt-3">
            <div className="col-md-12 col-11 colboxes1">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-md-8 ">
                        <p className="dep">Create a RING.node from ONLY 10 <span style={{ color: "#0bff2b" }}>$WOLF</span > tokens to earn lifetime high-yield  <span style={{ color: "#0bff2b" }}>$WOLF</span > token rewards</p>
                        <p className="dep">Currently estimated rewards for GOLD nodes <span style={{ color: "#0bff2b" }}>0.75 $WOLF</span > day</p>
                        <button className="btn btn-outline-primary" style={{color: "white"}}>CREATE A NODE</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Depp;
