import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './Section6.css'

import arcade from '../../assets/images/icons/arcade-lg.png'
const Section6 = () => {
  return (
    <section className="sixth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side */}
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={arcade} alt="Apple Arcade Logo" />
                </div>
              </div>

              <div className="description-wraper white">
                Agent 8 is a small hero on a big mission.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="#">
                      Play now<sup>2</sup>
                    </a>
                  </li>
                  <li>
                    <a href="#">Learn about Apple Arcade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wraper">
                Apple Card Monthly Installments
              </div>

              <div className="description-wraper">
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Apply now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
