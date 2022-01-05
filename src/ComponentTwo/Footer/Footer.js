import React from "react";
import logo from "../../asset/logo1.jpg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footercolor mt-5" >
      <div className="container ">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-4 text-lg-start">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-center footerimage"
            />{" "}
            <span className="footerspan">WOLF NODES</span>
            <p className="footerp mt-md-4 mt-2">
              © 2022 Copyright RING Financial
            </p>
          </div>
          <div className="col-lg-4 mt-md-5 mb-3">
            <span className="footerspan1">
              Main &nbsp; | &nbsp; Disclaimer &nbsp; | &nbsp; Docs &nbsp; |
              &nbsp; Contact
            </span>
          </div>
          <div className="col-lg-4 mt-md-5 mb-3 text-lg-end">
            <a className="footerspan1">Twitter</a> &nbsp;|&nbsp;{" "}
            <a className="footerspan1">Telegram</a> &nbsp;|&nbsp;{" "}
            <a className="footerspan1">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
