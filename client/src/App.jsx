import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductsList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<ProductList />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
