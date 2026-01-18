import React from "react";

import './Section1.css'
// import '../../apple-responsive-replica-html-css-mar-2020/css/styles.css'


const Section1 = () => {
  return (
    <section className="first-hightlight-wrapper">
      <div className="container">
        <div className="new-alert">New</div>

        <div className="title-wraper bold black">iPad Pro</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </div>

        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-end">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-start">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
