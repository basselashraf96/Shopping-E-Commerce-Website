import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
