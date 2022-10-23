import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

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
          <select name="color" onChange={(e) => handleFilters(e)}>
            <option defaultValue>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Pink</option>
          </select>
          <select name="size" onChange={(e) => handleFilters(e)}>
            <option value="Size" defaultValue>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter2">
          <label>Sort Products:</label>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="Newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
