import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FourO4 from "../../Components/FourO4";

function Iphone() {
  const [iphones, setIphones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIphones = async () => {
      try {
        const response = await fetch(
          "https://yimeriphone.yimertech.com/iphones",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);
        setIphones(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchIphones();
  }, []);

  const handleLearnMore = (productId) => {
    navigate(`/iphone/${productId}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 mt-5">iPhones</h1>
      <h2 className="text-center mb-4">The best for the brightest</h2>

      {iphones.length === 0 ? (
        <FourO4 />
      ) : (
        <div className="row">
          {iphones.map((iphone, index) => {
            const LEFT = 1;
            const RIGHT = 2;
            const shouldFlip = index % 2 === 0;
            const imagePosition = shouldFlip ? RIGHT : LEFT;
            const textPosition = shouldFlip ? LEFT : RIGHT;

            return (
              <div key={iphone.product_Id} className="col-12 mb-5">
                <div className="row align-items-center">
                  <div className={`col-md-6 order-${imagePosition}`}>
                    <img
                      src={iphone.product_img}
                      alt={iphone.product_name}
                      className="img-fluid rounded shadow"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>

                  <div className={`col-md-6 order-${textPosition}`}>
                    <div className="p-4">
                      <h2 className="mb-3">{iphone.product_name}</h2>
                      <p className="lead text-muted mb-3">
                        {iphone.brief_description}
                      </p>
                      <p className="mb-4">{iphone.pro_description}</p>

                      <div className="bg-light p-3 rounded">
                        <p className="h5 mb-2">
                          <strong>Starting at {iphone.starting_price}</strong>
                        </p>
                        <p className="text-muted mb-0">{iphone.price_range}</p>
                      </div>

                      <button
                        className="btn btn-primary btn-lg"
                        onClick={() => handleLearnMore(iphone.product_Id)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Iphone;
