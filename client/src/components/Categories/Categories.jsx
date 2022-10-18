import "./Categories.css";
import { categories } from "../../data";
const Categories = () => {
  return (
    <div id="categories-container">
      {categories.map((item) => {
        return (
          <div key={item.id} className="category">
            <img src={item.img} />
            <div className="category-info">
              <h1>{item.title}</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
