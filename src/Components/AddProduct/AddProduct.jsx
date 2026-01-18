import React, { useState } from "react";
import styles from "./AddProduct.module.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    product_url: "",
    product_name: "",
    brief_description: "",
    pro_description: "",
    product_img: "",
    product_link: "",
    starting_price: "",
    price_range: "",
    user_name: "",
    user_pwd: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://yimeriphone.yimertech.com/add-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.text();

      if (response.ok) {
        setMessage("✅ Product added successfully!");
        // Clear form
        setFormData({
          product_url: "",
          product_name: "",
          brief_description: "",
          pro_description: "",
          product_img: "",
          product_link: "",
          starting_price: "",
          price_range: "",
          user_name: "",
          user_pwd: "",
        });
      } else {
        setMessage("❌ Failed to add product. Try again.");
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add New Product</h2>

      <form className={styles.formGrid} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          name="product_url"
          value={formData.product_url}
          placeholder="Product URL"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="product_name"
          value={formData.product_name}
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="brief_description"
          value={formData.brief_description}
          placeholder="Brief Description"
          onChange={handleChange}
          required
        />

        <textarea
          className={`${styles.inputField} ${styles.textarea}`}
          name="pro_description"
          value={formData.pro_description}
          placeholder="Full Product Description"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="product_img"
          value={formData.product_img}
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="product_link"
          value={formData.product_link}
          placeholder="Product Link"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="starting_price"
          value={formData.starting_price}
          placeholder="Starting Price"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="price_range"
          value={formData.price_range}
          placeholder="Price Range"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="user_name"
          value={formData.user_name}
          placeholder="Username"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="user_pwd"
          value={formData.user_pwd}
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button className={styles.btn} type="submit">
          Add Product
        </button>

        <div className={styles.note}>{message}</div>
      </form>
    </div>
  );
}

export default AddProduct;
