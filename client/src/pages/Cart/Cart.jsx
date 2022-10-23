import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.clr};
`;

const Cart = () => {
  //! useSelector is how you get your redux state
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div id="cart">
      <Navbar />
      <div className="deals">
        <h1>Super Deal! Free Shipping on Orders Over $50</h1>
      </div>

      <div className="checkout-container">
        <div className="checkout-title">
          <h1>YOUR BAG</h1>
        </div>
        <div className="continue-chechkout-btn-container">
          <Link to="/products">
            <button>CONTINUE SHOPPING</button>
          </Link>
          <div className="bag-navigation">
            <a>Shopping Bag({cart.quantity})</a>
            <a>Your Whishlist(0)</a>
          </div>

          <button>PROCEED CHECKOUT</button>
        </div>
        <div className="product-bag-checkout">
          <div className="bag-items">
            {cart.products.map((item, index) => {
              return (
                <div key={index} className="bag-item">
                  <div className="bag-item-img">
                    <img src={item.img} alt="item" />
                  </div>
                  <div className="bag-item-info">
                    <div className="product-name-container">
                      <h3>Product:</h3>
                      <h2>{item.title}</h2>
                    </div>
                    <div className="product-id-container">
                      <div className="product-id">
                        <h3>ID:</h3>
                        <h2>{item._id}</h2>
                      </div>
                      <div className="product-qn">
                        <div className="minus">
                          <RemoveOutlinedIcon />
                        </div>
                        <div className="qn">{item.amount}</div>
                        <div className="plus">
                          <AddOutlinedIcon />
                        </div>
                      </div>
                    </div>
                    <div className="product-color-price">
                      <ProductColor clr={item.color}></ProductColor>
                      <div className="product-bag-price">
                        <div className="currency">&#36;</div>
                        <div className="price">{item.price}</div>
                      </div>
                    </div>
                    <div className="product-bag-size">
                      <h3>Size</h3>
                      <h2>{item.size}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order-summary">
            <h1>ORDER SUMMARY</h1>
            <div className="subtotal">
              <h3>Subtotal</h3>
              <div className="product-bag-price">
                <div className="currency">&#36;</div>
                <div className="price">{cart.total}</div>
              </div>
            </div>
            <div className="est">
              <h3>Est. Shipping</h3>
              <div className="product-bag-price">
                <div className="currency">&#36;</div>
                <div className="price">20</div>
              </div>
            </div>
            <div className="shipping">
              <h3>Shipping Discount</h3>
              <div className="product-bag-price">
                <div className="currency">&#36;</div>
                <div className="price">-20</div>
              </div>
            </div>
            <div className="total">
              <h3>Total Price</h3>
              <div className="product-bag-price">
                <div className="currency">&#36;</div>
                <div className="price">{cart.total}</div>
              </div>
            </div>
            <button className="checkoutnow-btn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
