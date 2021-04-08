import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = (props) => {
  const { id, name, image } = props.data;
  
  return (
    <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-center">
      <Link to={`/destination/${id}`}>
        <div className="box-style">
          <img style={{ width: "200px", margin: "10px" }} src={image} alt="" />
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Home;
