import "./Products.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { products } from "../../data";

const Products = () => {
  return (
    <div id="products-container">
      {products.map((item) => {
        return (
          <div key={item.id} className="product">
            <div className="product-img">
              <img src={item.img} />
            </div>
            <div className="product-actions">
              <div className="circle">
                <SearchIcon />
              </div>

              <div className="circle">
                <FavoriteBorderOutlinedIcon />
              </div>

              <div className="circle">
                <ShoppingCartOutlinedIcon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
