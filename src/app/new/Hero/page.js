"use client";
import React, { useState, useEffect } from "react";
import { FiTruck } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoRepeatOutline } from "react-icons/io5";
import { LuCircleCheckBig, LuTrello } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
// import { useRouter } from "next/navigation";

export default function Hero() {
  // const navItems = ["TSHIRT", "HATS", "NEW COLLECTIONS", "BRAND", "ABOUT"];
  // const [showMenu, setShowMenu] = useState(false);
  // const router = useRouter();

  const sliderImages = [
    "https://res.cloudinary.com/dxlykgx6w/image/upload/v1751104298/Group_505_zbfxcq.png",
    "https://res.cloudinary.com/dknrega1a/image/upload/v1751346425/image_dglpve.png",
    "https://res.cloudinary.com/dknrega1a/image/upload/v1746336727/cld-sample-2.jpg",
    "https://res.cloudinary.com/dknrega1a/image/upload/v1746336726/samples/cup-on-a-table.jpg",
    "https://res.cloudinary.com/dknrega1a/image/upload/v1746336726/samples/man-on-a-street.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  // const Goto_new_page = (index) => {
  //   const routes = [
  //     "/PDP_page",
  //     "/Catalog_page",
  //     "/new-collections",
  //     "/brand",
  //     "/about",
  //   ];
  //   router.push(routes[index]);
  // };

  return (
    <section className="relative">
      {/* <div className="sm:hidden flex justify-between items-center px-4 mt-4">
        <h2 className="text-xl font-bold text-[#333]">MENU</h2>
        <button
          className="text-2xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <HiX /> : <HiMenu />}
        </button>
      </div> */}

      {/* <div
        className={`${
          showMenu ? "flex" : "hidden"
        } sm:flex flex-wrap gap-4 sm:gap-8 justify-center mt-4 px-4`}
      >
        {navItems.map((item, index) => (
          <a
            key={item}
            className="uppercase text-base sm:text-xl font-semibold text-[#333333]"
            href="#"
            onClick={() => Goto_new_page(index)}
          >
            {item}
          </a>
        ))}
      </div> */}

      <section
        className="w-full h-[350px] mt-4 bg-cover bg-center flex items-center relative transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${sliderImages[currentIndex]})`,
        }}
      >
       

        <div className="max-w-7xl w-full px-4 sm:px-8 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1751105298/Asset_1_n45nya.png"
              alt="Gradient Bar"
              className="h-52 w-4 hidden sm:block"
            />
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight uppercase">
                Summer Looks, <br /> Hotter Deals!
              </h1>
              <p className="text-sm sm:text-base text-white max-w-xs sm:max-w-md">
                Grab flat <strong>30% OFF</strong> on select hats & tees.
                <br className="hidden sm:block" />
                Limited time only!
              </p>
              <button className="flex items-center gap-2 bg-white text-black px-4 py-3 w-fit text-sm font-bold border border-black shadow hover:scale-105 transition">
                SHOP NOW
                <IoIosArrowForward className="bg-black text-white rounded-full" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                currentIndex === index ? "bg-white w-8" : "bg-white/50 w-2.5"
              }`}
              style={{
                height: "10px",
                borderRadius: "9999px",
              }}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 mb-6 px-4 text-sm sm:text-xl font-semibold text-center">
        <div className="flex items-center gap-2">
          <FiTruck />
          <p>Express Delivery</p>
        </div>
        <div className="flex items-center gap-2">
          <IoRepeatOutline />
          <p>Easy Returns</p>
        </div>
        <div className="flex items-center gap-2">
          <LuCircleCheckBig />
          <p>Secure Payment</p>
        </div>
        <div className="flex items-center gap-2">
          <LuTrello />
          <p>Veteran Owned</p>
        </div>
      </div>
    </section>
  );
}
