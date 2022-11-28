import "./Navbar.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/apiCalls";
import { Link } from "react-router-dom";

const Navbar = () => {
  //! useSelector is how you get your redux state
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    logOut(dispatch);
  };
  return (
    <div id="nav">
      <div className="nav-container">
        <div className="left">
          <div className="website language">
            <h1>EN</h1>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div className="visible search">
            <input />
            <SearchOutlinedIcon style={{ color: "black" }} />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1>BASSEL</h1>
          </Link>
        </div>
        <div className="right">
          <ul className="pages">
            {!user && (
              <Link to="/register">
                <li>REGISTER</li>
              </Link>
            )}
            {!user ? (
              <Link to="/login">
                <li>SIGN IN</li>
              </Link>
            ) : (
              <Link onClick={handleClick} to="/">
                <li>SIGN OUT</li>
              </Link>
            )}

            <li>
              <Link to="/cart">
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden search">
        <input />
        <SearchOutlinedIcon style={{ color: "black" }} />
      </div>
    </div>
  );
};

export default Navbar;
