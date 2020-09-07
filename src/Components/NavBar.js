import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link> {""}
      <Link to="about">About</Link> {""}
      <Link to="product">Product</Link> {""}
      <Link to="cart">Cart</Link>
    </div>
  );
};
