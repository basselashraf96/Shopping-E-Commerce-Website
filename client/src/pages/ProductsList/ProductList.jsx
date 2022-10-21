import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
const ProductList = () => {
  return (
    <div id="product-list">
      <Navbar />
      <div className="deals">
        <h1>Super Deal! Free Shipping on Orders Over $50</h1>
      </div>
      <div className="productlist-title">
        <h1>Dresses</h1>
      </div>
      <div className="filters">
        <div className="filter1">
          <label>Filter Products:</label>
          <select>
            <option value="Color" selected>
              Color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
          </select>
          <select>
            <option value="Size" selected>
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="filter2">
          <label>Sort Products:</label>
          <select>
            <option value="Newest" selected>
              Newest
            </option>
            <option value="Price(asc)">Price (asc)</option>
            <option value="Price(desc)">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
