import React, { useContext, useState, createContext } from "react";
// import Shoes from "./../Shoes.json";
import { Link, Outlet, useParams } from "react-router-dom";
import "./../App.css";
import { DataContext } from "./DataContext";
import { Cart } from "./Cart";

export const Product = (props) => {
  const ShoeData = useContext(DataContext);
  let [count, setcount] = useState(0);
  let [data, setdata] = useState([]);
  console.log(data);
  // let localData = localStorage.setItem("data", data);
  // console.log("local data", localData);

  console.log(props);
  // export const productdata = createContext(data);
  // console.log(productdata);

  // let [arr, setarr] = usestate(0);

  return (
    <div>
      <Outlet />
      <h1>Welcome To Product</h1>

      <button
        onClick={() => {
          let localData = localStorage.setItem("data[]", "hassan");
          console.log(data);
          console.log("local data", localData);
          data.map((elem) => {
            // props.histroy.("cart");
            console.log(elem);
          });
        }}
      >
        Cart{count}
      </button>
      <div className="product-container">
        {Object.keys(ShoeData).map((items) => {
          return (
            <div key={items} className="link">
              <h1>{ShoeData[items].name}</h1>
              <img src={ShoeData[items].img} height={150} />
              <h3>{ShoeData[items].price} </h3>
              <Link key={items} className="link" to={`${items}`}>
                {" "}
                <button
                  onClick={() => {
                    // setarr(arr.concat("hassan"));
                    console.log(ShoeData[items]);
                    setdata(data.concat(ShoeData[items]));

                    setcount(++count);
                    console.log(count);
                  }}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
