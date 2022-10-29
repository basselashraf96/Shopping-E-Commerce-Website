import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductsList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<ProductList />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/login"
          exact
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/success" exact element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
