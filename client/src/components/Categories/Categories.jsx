import "./Categories.css";
import { categories } from "../../data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories-container">
      {categories.map((item) => {
        return (
          <div key={item.id} className="category">
            <img src={item.img} />
            <div className="category-info">
              <h1>{item.title}</h1>
              <Link to={`/products/${item.category}`}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
