import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";

function App() {
  const admin = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser;
    } else {
      return "";
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin() && (
          <>
            <TopBar />
            <div className="container">
              <SideBar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>
              <Route path="/products/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
