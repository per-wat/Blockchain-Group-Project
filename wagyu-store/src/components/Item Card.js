import data from "./Data Sample.json";
import { useState } from "react";
import Popup from 'reactjs-popup';
import "../styles/Item Card.css";
import "../styles/variables.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
<script src="https://cdn.lordicon.com/fudrjiwc.js"></script>;

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function ItemCard(props) {
  const { img } = props;
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="container">
      <Popup
        open={openPopup}
        closeOnDocumentClick
        onClose={() => setOpenPopup(false)}
      >
        <div className="modal">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </div>
        </div>
      </Popup>
      <div className="card">
        <div className="card-img">
          <img
            src={require("../assets/CowA101.webp")}
            alt={data.CowA101.grade}
          />
        </div>
        <div className="card-info">
          <p className="text-title">{data.CowA101.grade}</p>
          <p className="text-body">Breed: {data.CowA101.breed}</p>
          <p className="text-body">Age: {data.CowA101.age}</p>
          {data.CowA101.halalCareMethod.toLowerCase() === "halal" &&
          data.CowA101.halalslaughterMethod.toLowerCase() === "halal" ? (
            <p className="text-body halal">Halal</p>
          ) : (
            <p className="text-body haram">Haram</p>
          )}
          <p className="text-body">
            Date Distributed: {data.CowA101.dateDistribute}
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
