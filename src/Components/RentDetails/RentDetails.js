import React from 'react';
import { useParams } from 'react-router';
import safeRideData from '../../safeRideData/safeRideData';
import Map from '../Map/Map';
import "./RentDetails.css";

const RentDetails = () => {
    const {id} = useParams();
    const data = safeRideData.find(td => td.id == id);
    const {name, image, rent, person} = data;

    return (
      <div container>
        <div className="row">
          <div className="col-md-6">
            <div className="row rent-details-style">
              <div className="col-md-3">
                <img width="100" src={image} alt="" />
              </div>
              <div className="col-md-3">
                <h3>{name}</h3>
              </div>
              <div className="col-md-3">
                <h3>person:{person}</h3>
              </div>
              <div className="col-md-3">
                <h3>${rent}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Map/>
          </div>
        </div>
      </div>
    );
};

export default RentDetails;