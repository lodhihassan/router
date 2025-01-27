import React, { createContext } from "react";

const ProductData = {
  NIKE: {
    name: "NIKE-001",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "$50",
  },
  PUMA: {
    name: "PUMA-200",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "$60",
  },
  CAT: {
    name: "CAT-900",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "$40",
  },
  ADIDAS: {
    name: "ADIDAS-1000",
    img:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$30",
  },
  BOSTON: {
    name: "BOSTON-001",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: "$99",
  },
  ADIDAS1: {
    name: "ADIDAS-BL",
    img:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 ",
    price: "$100",
  },
};

export const DataContext = createContext(ProductData);

// export const DataProvider = () => {
//   return <div></div>;
// };
