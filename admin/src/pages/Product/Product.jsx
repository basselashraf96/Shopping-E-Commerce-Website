import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../dummyData";
import PublishIcon from "@mui/icons-material/Publish";
const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAtgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwEH/8QAMhAAAgEDAgMHAwEJAAAAAAAAAAECAwQRITEFEpEUIjJBUWFxE1OBQwYjM0JjcoKSsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARnJQWZPBJvBRrNzk87eQHSd5FPEYtke2P7T6ldxwtDlPK82UXe2/wBJ9Tztr+0+pn06n72MfV4LUo90I7dtf2X1PO3NeKjLHtqU22nrJkfqpac2X7ga9CvTrLMJfg6mLGonNSi0przXma9Kf1KcZeqIqYAAAAAAAAAAAAAAAAAA8l4X8FZQTy2WjOveaFTlj5rIHbnhHwpfkzeP3dza8Lr3VhZK9rUUp9nUuWU4rxKLw+9jOF5lKy4jc3PFL+zqcOuaFO15OS5qLuV+ZZfL8bM0IzlF6lRV4NcUOJUre+tJOdtWp/UptrD+GvJrZo13HJGltmKWGdI5zqtAMmlxF1ePzsLa1jUo20M3dzN4UJtZjCCx3n5v0NOajUWJRi/lEJz5pyaONWpKnTnKMXJxi2ord+wEKtq4VIypZxnZs1LVYp4xjUxeBcRrcT4ZbXd3Y1rCrVWZW1x46euNf+/k3oJKKSIqQAAAAAAAAAAAAAAAAAA8exQuLiUMtKL+UaBj3WXLX1A9V1J7wp9CTqRlq6dPP9iKab0Oib01Kiz9XCwkkvg9+vL26FbLeMegzuvcCw62m0eh5CopPDhHoV9U92ThoBa7rWsV0O9o8qSWyexUUngsWM9J5e7WALgAIoAAAAAAAAAAAAAAAA9jMuksvQ02Zt0tWBTS12OiS9ERS1OhYjzC9Bj2PQVHmCcMehElADqsY2R3s0sS0W5wWxYs9p/JFiyACKAAAAAAAAAAAAAAAAGddbs0WZ1ytWBVW5NEUtSaRYgeHp4VAlAiSgB1WxYs3pP5K3kWLLafySrFoAEUAAAAAAAAAAAAAAAAKdzTeWXCMoqS1AzOTDPcFmvH6cXLGUjIuOLWtJtTnh+6Ki48EW0Y1X9o+HQeJXEU/hnF/tLw57XMX/iyxNb3Mj2M16mJDjVnPw1l0ZftJSu1m376/CBq9Kokty/aQcaKzu9Sta2DhJTrtNr+VbGgS1YAAigAAAAAAAAAAAAAAABCcuUmcK3iA51eWa72vsypO2ot604f6lhkGEVZWlF/pQ6HN2lH7UOhckRZUVey0l+lHoSjRhFrEEdmAOtvcypYU23D38jRTysrUyXt+TTofwYfBFjoAAoAAAAAAAD/2Q=="
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id</span>
              <span className="productInfoValue">123</span>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue">5265</span>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">active</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>in stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAtgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwEH/8QAMhAAAgEDAgMHAwEJAAAAAAAAAAECAwQRITEFEpEUIjJBUWFxE1OBQwYjM0JjcoKSsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARnJQWZPBJvBRrNzk87eQHSd5FPEYtke2P7T6ldxwtDlPK82UXe2/wBJ9Tztr+0+pn06n72MfV4LUo90I7dtf2X1PO3NeKjLHtqU22nrJkfqpac2X7ga9CvTrLMJfg6mLGonNSi0przXma9Kf1KcZeqIqYAAAAAAAAAAAAAAAAAA8l4X8FZQTy2WjOveaFTlj5rIHbnhHwpfkzeP3dza8Lr3VhZK9rUUp9nUuWU4rxKLw+9jOF5lKy4jc3PFL+zqcOuaFO15OS5qLuV+ZZfL8bM0IzlF6lRV4NcUOJUre+tJOdtWp/UptrD+GvJrZo13HJGltmKWGdI5zqtAMmlxF1ePzsLa1jUo20M3dzN4UJtZjCCx3n5v0NOajUWJRi/lEJz5pyaONWpKnTnKMXJxi2ord+wEKtq4VIypZxnZs1LVYp4xjUxeBcRrcT4ZbXd3Y1rCrVWZW1x46euNf+/k3oJKKSIqQAAAAAAAAAAAAAAAAAA8exQuLiUMtKL+UaBj3WXLX1A9V1J7wp9CTqRlq6dPP9iKab0Oib01Kiz9XCwkkvg9+vL26FbLeMegzuvcCw62m0eh5CopPDhHoV9U92ThoBa7rWsV0O9o8qSWyexUUngsWM9J5e7WALgAIoAAAAAAAAAAAAAAAA9jMuksvQ02Zt0tWBTS12OiS9ERS1OhYjzC9Bj2PQVHmCcMehElADqsY2R3s0sS0W5wWxYs9p/JFiyACKAAAAAAAAAAAAAAAAGddbs0WZ1ytWBVW5NEUtSaRYgeHp4VAlAiSgB1WxYs3pP5K3kWLLafySrFoAEUAAAAAAAAAAAAAAAAKdzTeWXCMoqS1AzOTDPcFmvH6cXLGUjIuOLWtJtTnh+6Ki48EW0Y1X9o+HQeJXEU/hnF/tLw57XMX/iyxNb3Mj2M16mJDjVnPw1l0ZftJSu1m376/CBq9Kokty/aQcaKzu9Sta2DhJTrtNr+VbGgS1YAAigAAAAAAAAAAAAAAABCcuUmcK3iA51eWa72vsypO2ot604f6lhkGEVZWlF/pQ6HN2lH7UOhckRZUVey0l+lHoSjRhFrEEdmAOtvcypYU23D38jRTysrUyXt+TTofwYfBFjoAAoAAAAAAAD/2Q=="
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
