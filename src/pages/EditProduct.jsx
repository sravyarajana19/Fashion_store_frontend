import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import api from "../services/api";

function EditProduct() {

  const { id } = useParams();

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

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {

    const response =
      await api.get(`/products/${id}`);

    setFormData(response.data);
  }

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.put(
      `/products/${id}`,
      formData
    );

    navigate("/products");
  }

  return (
    <div className="form-container">

      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Product
        </button>

      </form>

    </div>
  );
}

export default EditProduct;