"use client";
import React, { useEffect, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";

export default function New_Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://e-com-customizer.onrender.com/api/v1/totalProduct"
        );
        const data = await res.json();
        setProducts(data.AllProduct || []);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://e-com-customizer.onrender.com/api/v1/showAllCategory"
        );
        const data = await res.json();
        setCategories(data.data || []);
        console.log("Categories fetched:", data.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryToggle = (categoryTitle) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryTitle)
        ? prev.filter((c) => c !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.subCategory?.title)
        );
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-[60px]">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full h-[450px] md:w-64 bg-white p-4 shadow-sm ">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h3 className="text-[18px] font-extrabold text-[#2e2e2e] uppercase">
              FILTER BY
            </h3>
            <button
              className="text-[#3559C7] text-sm font-bold uppercase hover:underline"
              onClick={() => setSelectedCategories([])}
            >
              CLEAR ALL
            </button>
          </div>

          {categories.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-[#2e2e2e] uppercase">
                  Categories
                </h4>
                <button className="w-5 h-5 border border-[#4F4F4F] rounded-full flex items-center justify-center">
                  <span className="text-[14px] font-bold text-[#4F4F4F] leading-none">
                    −
                  </span>
                </button>
              </div>

              <ul className="space-y-8 border-b border-gray-300 pb-3">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <label
                      htmlFor={cat.title}
                      className="text-[14px] text-[#2e2e2e] font-medium"
                    >
                      {cat.title}
                    </label>
                    <input
                      type="checkbox"
                      id={cat.title}
                      checked={selectedCategories.includes(cat.title)}
                      onChange={() => handleCategoryToggle(cat.title)}
                      className="w-5 h-5 border border-[#a0a0a0] rounded-sm  cursor-pointer checked:bg-[#3559C7] checked:border-[#3559C7] checked:bg-check-icon transition-all"
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 px-1">
            <div className="text-[#4F4F4F] text-[16px] sm:text-[18px] font-semibold uppercase">
              Home / All Products / Catalog
            </div>
            <select className="border px-3 py-2 rounded text-sm w-full sm:w-auto">
              <option>Sort by featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <section className="px-1 sm:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded shadow-sm overflow-hidden group bg-white"
                >
                  <div className="p-4">
                    <div className="p-1.5 relative border border-gray-300">
                      <img
                        src={item.thumbnail?.[0] || "/no-image.png"}
                        alt="image"
                        className="w-full h-52 object-contain mb-4"
                      />
                      {item.sale && (
                        <div className="absolute top-0 left-0 bg-[#539C27] text-white px-6 tracking-widest py-1 text-xs font-bold z-10">
                          SALE
                        </div>
                      )}
                    </div>
                    <h3 className="text-[17px] font-semibold mt-4">
                      {item.title?.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </h3>
                    <p className="text-lg font-bold mt-1">
                      ₹{item.price ? item.price.toLocaleString("en-IN") : "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-4 pb-4">
                    <button className="flex-1 bg-[#3559C7] text-white font-bold text-sm py-2 px-4 flex items-center justify-center gap-2 hover:bg-blue-800 transition">
                      <LiaShoppingBagSolid />
                      SHOP NOW
                    </button>
                    <button className="ml-2 border border-gray-300 w-12 h-12 flex items-center justify-center hover:bg-gray-100">
                      <FaRegHeart size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10 flex justify-center flex-wrap gap-2">
            {[1, 2, 3, 4, "...", 10].map((p, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border text-sm ${
                  p === 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
