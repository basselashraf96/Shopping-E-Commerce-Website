import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";

import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import styled from "styled-components";

import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../api";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ColorPicks = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.colorProp.toLowerCase()};
  border-radius: 50%;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleClick = (operation) => {
    if (operation === "plus") {
      setAmount((prev) => prev + 1);
    } else {
      if (amount !== 1) {
        setAmount((prev) => prev - 1);
      }
    }
  };

  const handleAddCartClick = () => {
    //! this is the action addProduct called with the api and the user chosen color and size passed to the dispatch to render component and change curretn state
    dispatch(addProduct({ ...product, amount, color, size }));
  };

  return (
    <div id="product">
      <Navbar />
      <div className="deals">
        <h1>Super Deal! Free Shipping on Orders Over $50</h1>
      </div>

      <div className="product-container">
        <div className=" wrapper">
          <div className="prduct-img-container">
            <img src={product.img} alt="" />
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <div className="price-container">
              <div className="currency">&#36;</div>
              <div className="price">{product.price}</div>
            </div>
            <div className="color-size-container">
              <div className="colors-available">
                <h3>Color</h3>
                <div className="colors">
                  {product.color
                    ? product.color.map((clr, index) => {
                        return (
                          <ColorPicks
                            key={index}
                            onClick={() => setColor(clr)}
                            colorProp={clr}
                          ></ColorPicks>
                        );
                      })
                    : null}
                </div>
              </div>
              <div className="product-size">
                <label>Size</label>
                <select onChange={(e) => setSize(e.target.value)}>
                  <option defaultValue={"size"}>size</option>

                  {product.size
                    ? product.size.map((size, index) => {
                        return <option key={index}>{size}</option>;
                      })
                    : null}
                </select>
              </div>
            </div>
            <div className="qn-cart-container">
              <div className="quantity-container">
                <div className="minus" onClick={() => handleClick("minus")}>
                  <RemoveOutlinedIcon />
                </div>
                <div className="qn">{amount}</div>
                <div className="plus" onClick={() => handleClick("plus")}>
                  <AddOutlinedIcon />
                </div>
              </div>
              <button onClick={() => handleAddCartClick()}>ADD TO CART</button>
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
