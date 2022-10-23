import "./Products.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { productsFake } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredPorducts, setFilteredPorducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products"
        );

        setProducts(res.data);
      } catch (e) {}
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredPorducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredPorducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredPorducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredPorducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div id="products-container">
      {cat
        ? filteredPorducts.map((item) => {
            return (
              <div key={item._id} className="product">
                <div className="product-img">
                  <img src={item.img} />
                </div>
                <div className="product-actions">
                  <Link to={`/product/${item._id}`}>
                    <div className="circle">
                      <SearchIcon />
                    </div>
                  </Link>

                  <div className="circle">
                    <FavoriteBorderOutlinedIcon />
                  </div>

                  <div className="circle">
                    <ShoppingCartOutlinedIcon />
                  </div>
                </div>
              </div>
            );
          })
        : products.map((item) => {
            return (
              <div key={item._id} className="product">
                <div className="product-img">
                  <img src={item.img} />
                </div>
                <div className="product-actions">
                  <Link to={`/product/${item._id}`}>
                    <div className="circle">
                      <SearchIcon />
                    </div>
                  </Link>

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
