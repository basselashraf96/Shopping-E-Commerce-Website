import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";

import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
const Product = () => {
  return (
    <div id="product">
      <Navbar />
      <div className="deals">
        <h1>Super Deal! Free Shipping on Orders Over $50</h1>
      </div>

      <div className="product-container">
        <div className=" wrapper">
          <div className="prduct-img-container">
            <img
              src="https://www.freepnglogos.com/uploads/jacket-png/jacket-png-image-purepng-transparent-png-image-library-3.png"
              alt=""
            />
          </div>
          <div className="product-info">
            <h1>Denim Jumpsuit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              veritatis ratione saepe repellendus hic aperiam qui distinctio.
            </p>
            <div className="price-container">
              <div className="currency">&#36;</div>
              <div className="price">20</div>
            </div>
            <div className="color-size-container">
              <div className="colors-available">
                <h3>Color</h3>
                <div className="colors">
                  <div className="color"></div>
                  <div className="color"></div>
                  <div className="color"></div>
                </div>
              </div>
              <div className="product-size">
                <label>Size</label>
                <select>
                  <option disabled selected>
                    size
                  </option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="qn-cart-container">
              <div className="quantity-container">
                <div className="minus">
                  <RemoveOutlinedIcon />
                </div>
                <div className="qn">1</div>
                <div className="plus">
                  <AddOutlinedIcon />
                </div>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
