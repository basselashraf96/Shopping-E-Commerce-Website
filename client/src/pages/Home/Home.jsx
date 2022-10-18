import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
const Home = () => {
  return (
    <div id="home">
      <div className="deals">
        <h1>Super Deal! Free Shipping on Orders Over $50</h1>
      </div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
