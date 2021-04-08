import React from "react";
import safeRideData from "../../safeRideData/safeRideData";
import Home from "../Home/Home";

const SafeRideDataLoad = () => {
  const bgStyle = {
    backgroundImage: "url(" + "https://i.ibb.co/2dgnmrd/Bg.png" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "550px",
    display: "flex",
    alignItems: "center"
  };


  return (
    <div style={bgStyle}>
      <div className="container">
        <div className="row">
          {safeRideData.map((data) => (
            <Home data={data} key={data.id}></Home>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeRideDataLoad;
