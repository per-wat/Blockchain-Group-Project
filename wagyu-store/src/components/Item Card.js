import { useState } from "react";
import Popup from "reactjs-popup";
import "../styles/Item Card.css";
import "../styles/variables.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
<script src="https://cdn.lordicon.com/fudrjiwc.js"></script>;

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function ItemCard(props) {
  const {age, breed, grade,
    farmerName, farmLoc, halalCareMethod,
    butcherName, butcherLoc, halalslaughterMethod,
    imgRef, dateDistribute, availability} = props.data;
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Popup
        open={openPopup}
        closeOnDocumentClick
        onClose={() => setOpenPopup(false)}
      >
        <div className="modal-header">{grade}</div>
        <div className="modal-container">
          <div className="modal-img">
            <img
              src= {require("../assets/CowA101.webp")}
              alt={grade}
            />
          </div>
          <div className="modal-info">
            <div>
              <p>Breed: {breed}</p>
              <p>Age: {age}</p>
              {halalCareMethod.toLowerCase() === "halal" &&
              halalslaughterMethod.toLowerCase() === "halal" ? (
                <p className=" halal">Halal</p>
              ) : (
                <p className=" haram">Haram</p>
              )}
              <p>Date Distributed: {dateDistribute}</p>
            </div>
            <div>
              <p>Farmer Name: {farmerName}</p>
              <p>Farmer Location: {farmLoc}</p>
              <p>Butcher Name: {butcherName}</p>
              <p>Butcher Location: {butcherLoc}</p>
            </div>
          </div>
        </div>
      </Popup>
      <div className="card">
        <div className="card-img">
          <img
            src= {require("../assets/CowA101.webp")}
            alt={grade}
          />
        </div>
        <div className="card-info">
          <p className="text-title">{grade}</p>
          <p className="text-body">Breed: {breed}</p>
          <p className="text-body">Age: {age}</p>
          {halalCareMethod.toLowerCase() === "halal" &&
          halalslaughterMethod.toLowerCase() === "halal" ? (
            <p className="text-body halal">Halal</p>
          ) : (
            <p className="text-body haram">Haram</p>
          )}
          <p className="text-body">
            Date Distributed: {dateDistribute}
          </p>
        </div>
        <div className="card-footer">
          <span className="text-title">$499.49</span>
          <span onClick={() => setOpenPopup(true)}>
            <lord-icon
              src="https://cdn.lordicon.com/dnmvmpfk.json"
              trigger="hover"
              colors="primary:#d3d3d3"
              className="info-btn"
              scale="60"
            ></lord-icon>
          </span>
          <div className="card-button">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              stroke="100"
              colors="primary:#f5f5f5,secondary:#d3d3d3"
            ></lord-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
