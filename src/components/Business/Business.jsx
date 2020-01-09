import React, { Component } from "react";
import "./Business.css";

class Business extends Component {
  render() {
    const {business} = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.city}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
