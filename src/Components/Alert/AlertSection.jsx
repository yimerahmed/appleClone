import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Alert.css'
const AlertSection = () => {
  return (
    <section className="alert-section top-50">
      <div className="container">
        <div className="alert-title">We’re open for you.</div>
        <div className="alert-text">
          Our retail stores are closed, but you can buy our products here online
          and get fast, free delivery. If you need help finding the right
          product or have a question on your order, chat online with a
          Specialist or call <strong>1-800-MY-APPLE</strong>.
          <br />
          For service and support, visit{" "}
          <a
            href="https://support.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.apple.com
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default AlertSection;
