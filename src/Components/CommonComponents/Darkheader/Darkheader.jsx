import React from "react";
import CallIcon from "@mui/icons-material/Call";
import "./darkheader.scss";
import logo from "../../../Assets/images/edlLogo.svg";

function Darkheader() {
  return (
    <div className="Darkheader-base">
      <div className="container d-flex justify-content-between">
        <img src={logo} alt="" className="img"></img>
        <div className="rightside d-flex align-items-center">
          <CallIcon className="mb-1 me-2 mt-2" sx={{ color: "#fff" }} />
          <div className="call-info">
            <span>Toll free number</span>
            <p>1800 12000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Darkheader;
