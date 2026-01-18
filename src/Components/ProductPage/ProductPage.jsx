import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FourO4 from "../FourO4";
import axios from "../../API/axiosConfig"; // <-- import your axios instance

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { Product_Id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use your deployed backend URL
        const response = await axios.get("/iphones");

        const data = response.data;
        console.log(data);

        // Find the specific product by Product_Id
        const singleProduct = data.find(
          (item) => item.product_Id == Product_Id,
        );

        if (singleProduct) {
          setProduct(singleProduct);
        } else {
          console.log("Product not found");
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    if (Product_Id) {
      fetchProduct();
    }
  }, [Product_Id]);

  if (!product)
    return (
      <div className="text-center p-4">
        <FourO4 />
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row ">
        {/* Product Image */}
        <div className="col-md-6 mt-5">
          <img
            src={product.product_img}
            alt={product.product_name}
            className="img-fluid rounded shadow"
            style={{
              height: "500px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <div className="p-4">
            <h1 className="mb-3">{product.product_name}</h1>
            <p className="lead text-muted mb-3">{product.brief_description}</p>
            <p className="mb-4">{product.pro_description}</p>

            <div className="bg-light p-4 rounded mb-4">
              <h3 className="mb-3">Pricing</h3>
              <p className="h4 mb-2">
                <strong>Starting at {product.starting_price}</strong>
              </p>
              <p className="text-muted h5">{product.price_range}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
