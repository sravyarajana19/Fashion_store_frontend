import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );
    const wishlist =
  useSelector(
    state => state.wishlist
  );

  return (
    <nav>

      <Link to="/">
        Fashion Store
      </Link>

      <Link to="/products">
        Products
      </Link>

      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>

          <Link to="/login">
            Login
          </Link>
        </>
      )}

      {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}
      <Link to="/wishlist">
  Wishlist ({wishlist.length})
</Link>

    </nav>
  );
}

export default Navbar;