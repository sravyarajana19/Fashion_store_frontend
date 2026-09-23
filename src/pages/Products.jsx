import { useEffect, useState } from "react";
import api from "../services/api";
// import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [price, setPrice] = useState("All");

  const [sort, setSort] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {

    try {

      const response =
        await api.get("/products");

      setProducts(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  // DELETE PRODUCT
  async function deleteProduct(id) {

    await api.delete(
      `/products/${id}`
    );

    setProducts(
      products.filter(
        product => product.id !== id
      )
    );
  }

  // FILTER PRODUCTS
  let finalProducts =
    products.filter(product => {

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        category === "All" ||
        product.category === category;

      let priceMatch = true;

      if (price === "Under 1000") {

        priceMatch =
          product.price < 1000;

      }

      if (price === "1000 - 2000") {

        priceMatch =
          product.price >= 1000 &&
          product.price <= 2000;

      }

      if (price === "Above 2000") {

        priceMatch =
          product.price > 2000;

      }

      return (
        searchMatch &&
        categoryMatch &&
        priceMatch
      );

    });

  // SORT PRODUCTS
  if (sort === "low") {

    finalProducts.sort(
      (a, b) =>
        a.price - b.price
    );

  }

  if (sort === "high") {

    finalProducts.sort(
      (a, b) =>
        b.price - a.price
    );

  }

  return (
    <>
      <h1>Fashion Products</h1>

      <Link
        className="add-btn"
        to="/add-product"
      >
        Add Product
      </Link>

      {/* FILTERS */}

      <div className="filters">

        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Footwear</option>

        </select>

        <select
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        >

          <option>All</option>
          <option>Under 1000</option>
          <option>1000 - 2000</option>
          <option>Above 2000</option>

        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >

          <option value="">
            Sort Price
          </option>

          <option value="low">
            Low To High
          </option>

          <option value="high">
            High To Low
          </option>

        </select>

      </div>

      {/* PRODUCTS */}

      <div className="products">

        {finalProducts.map(product => (

          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />

        ))}

      </div>

    </>
  );
}

export default Products;