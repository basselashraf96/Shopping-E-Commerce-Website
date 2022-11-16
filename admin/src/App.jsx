import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<UserList />} />
          <Route path="/user/:userId" exact element={<User />} />
          <Route path="/newUser" exact element={<NewUser />} />
          <Route path="/products" exact element={<ProductList />} />
          <Route path="/products/:productId" exact element={<Product />} />
          <Route path="/newProduct" exact element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
