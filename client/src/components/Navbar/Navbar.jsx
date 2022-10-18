import "./Navbar.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <div id="nav">
      <div className="left">
        <div className="website language">
          <h1>EN</h1>
          <ArrowDropDownOutlinedIcon />
        </div>
        <div className="search">
          <input />
          <SearchOutlinedIcon style={{ color: "black" }} />
        </div>
      </div>
      <div className="center">
        <h1>BASSEL</h1>
      </div>
      <div className="right">
        <ul className="pages">
          <li>REGISTER</li>
          <li>SIGN IN</li>
          <li>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
