import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeWishlist
} from "../features/wishlistSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlist =
    useSelector(
      state => state.wishlist
    );

  return (
    <div>

      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (

        <div>
          <h2>
            Your Wishlist is Empty
          </h2>

          <p>
            Add products from Products page.
          </p>
        </div>

      ) : (

        <div className="products">

          {wishlist.map(product => (

            <div
              key={product.id}
              className="card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>
                {product.name}
              </h2>

              <p>
                ₹{product.price}
              </p>

              <p>
                ⭐ {product.rating}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    removeWishlist(
                      product.id
                    )
                  )
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;