"use client";

import React from "react";
// import Navbar from "./Navbar/page";


// import ProductDetailPage from "./Product_Overview/page";
import New_Product from "./new_product/page";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

function New_product_AllSection() {
  return (
    <>
      <div className=" mx-auto max-w-[1720px]">
        <Navbar/>
          <New_Product />
        <Footer />
      </div>
    </>
  );
}

export default New_product_AllSection;
