import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataContext";

export const Cart = ({ props }) => {
  console.log(props);
  let { id } = useParams();
  let [iddata, setdata] = useState([]);
  console.log(iddata);

  console.log(iddata);
  const ShoeData = useContext(DataContext)[id];
  console.log(ShoeData);

  if (!ShoeData) {
    return <h1>Your Cart Is Empty</h1>;
  }
  return (
    <div>
      <h1>Welcom To Cart{id} </h1>

      <div className="link">
        <h1>{ShoeData.name}</h1>
        <img src={ShoeData.img} height={400} />
        <h3>{ShoeData.price} </h3>
      </div>
    </div>
  );
};
