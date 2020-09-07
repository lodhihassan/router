import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { Cart } from "./Components/Cart";
import { NavBar } from "./Components/NavBar";
const App = () => {
  function Notfound() {
    return <h1>Page Not Found</h1>;
  }
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/product" element={<Product />} 
            <Route path="product:id" element={<Cart />} />
          </Route> */}
          <Route path="product" element={<Product />}>
            <Route path=":id" element={<Cart />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
