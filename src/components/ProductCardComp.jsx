import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addWishlist
} from "../features/wishlistSlice";

function ProductCardComp({ product, onDelete }) {
  const dispatch = useDispatch();

function handleWishlist() {

  dispatch(
    addWishlist(product)
  );

}
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <p>₹{product.price}</p>

      <p>⭐ {product.rating}</p>

      <Link
        to={`/products/${product.id}`}
      >
        View Details
      </Link>

      <Link
        to={`/edit-product/${product.id}`}
      >
        Edit
      </Link>

      <button
        className="delete-btn"
        onClick={() =>
          onDelete(product.id)
        }
      >
        Delete
      </button>
      <button
  className="wishlist-btn"
  onClick={handleWishlist}
>
  ❤️ Add To Wishlist
</button>

    </div>
  );
}

export default ProductCardComp;