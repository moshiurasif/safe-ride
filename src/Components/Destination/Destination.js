import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import safeRideData from "../../safeRideData/safeRideData";
import Map from '../Map/Map';
import "./Destination.css";

const Destination = () => {
    const {id} = useParams();
    const data = safeRideData.find(td => td.id == id);
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="form-style">
            <form>
              <label htmlFor="location">Pick From</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Location"
                id="location"
              />
              <br />
              <label htmlFor="destination">Pick To</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Destination"
                id="destination"
              />
              <br />
              <Link to={`/rent/${data.id}`}>
                <input type="submit" value="Search"/>
              </Link>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <Map />
        </div>
      </div>
    );
};

export default Destination;