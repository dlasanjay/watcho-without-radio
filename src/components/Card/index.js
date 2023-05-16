import React, { useState } from "react";
import "./card.css";

const index = ({ handleClick, showSubsPopup, bestBuy }) => {
  return (
    <div className="subsCard">
      {bestBuy ? (
        <div className="bestBuy">
          <div className="bestBuy-wrap">
            <img src={require("../../assets/images/best-buy.png")} alt="" />
            <span>Best Buy</span>
          </div>
        </div>
      ) : null}
      <div className="cardHeader">
        <h3 className="packageName">
          Watcho
          <span>Masti</span>
        </h3>
        <div className="packagePrice">
          <div className="priceBox">
            <div className="discounted">&#8377; 1999</div>
            <div className="actual">&#8377; 6490</div>
          </div>
          {/* <div className='subsType'>
              <div className='radioBox'>
                <input id="year-option" value="yearly" checked  name="package-term" type="radio" />
                <label for="year-option">Yearly</label>    
                <div class="check"></div>
              </div>
              <div className='radioBox'>
                <input id="month-option" value="monthly"  name="package-term" type="radio" />
                <label for="month-option">Monthly</label>    
                <div class="check"></div>
              </div>            
            </div> */}
        </div>
      </div>
      <div className="cardBody">
        <h4>11 OTT Platforms</h4>
        <p>Access across TV, Laptop, Mobile & Tablets at a time</p>
        <ul className="platforms-list greater-10">
          <li>
            <img
              src={require("../../assets/images/logos/logos-1.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-2.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-3.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-4.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-5.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-6.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-7.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-8.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-7.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-8.png")}
              alt="platformname"
            />
          </li>
          <li>
            <img
              src={require("../../assets/images/logos/logos-7.png")}
              alt="platformname"
            />
          </li>
        </ul>
        <div className="saveUp">You save upto &#8377; 4470</div>
        <button type="button" className="btn-subs" onClick={showSubsPopup}>
          Subscribe Now
        </button>
        <button onClick={handleClick} className="btn-readmore">
          Know more
        </button>
      </div>
    </div>
  );
};

export default index;
