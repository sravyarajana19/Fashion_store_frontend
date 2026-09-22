import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      category: "",
      brand: "",
      price: "",
      rating: "",
      image: "",
      description: "",
      color: ""
    });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.post(
      "/products",
      formData
    );

    navigate("/products");
  }

  return (
    <div className="form-container">

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="color"
          placeholder="Color"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;