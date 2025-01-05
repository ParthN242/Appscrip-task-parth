"use client";
import "../styles/product.css";
import { SORTING_MENU } from "../constants";
import { ArrowLeft, ArrowRight } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import axios from "axios";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get("/api/products");
        if (data.success) setProducts(data.products);
        else console.log(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <section className="product_section">
      <div className="product_menu">
        <div className="left">
          <p className="font-bold">3425 ITEMS</p>
          <button
            className="filter"
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          >
            {isFilterMenuOpen ? (
              <>
                <Image
                  src={ArrowLeft}
                  width={16}
                  height={16}
                  alt="Left Arrow"
                  title="Left Arrow"
                />
                <div>HIDE FILTER</div>
              </>
            ) : (
              <>
                <Image
                  src={ArrowRight}
                  width={16}
                  height={16}
                  alt="Right Arrow"
                  title="Right Arrow"
                />
                <div>SHOW FILTER</div>
              </>
            )}
          </button>
        </div>
        <div
          className="left_mobile"
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        >
          <p>FILTER</p>
        </div>
        <div className="right">
          <select name="sorting">
            {SORTING_MENU.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="products">
        {isFilterMenuOpen && (
          <div className="product_filters_wrapper">
            <ProductFilter />
          </div>
        )}
        <div
          className={`product_list ${
            isFilterMenuOpen ? "filter_menu_open" : ""
          }`}
        >
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {products.length === 0 && <div className="loading">Loading...</div>}
        </div>
      </div>
    </section>
  );
}

export default Product;
