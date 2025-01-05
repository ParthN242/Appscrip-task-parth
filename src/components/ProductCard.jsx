import { Heart } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product_card">
      <div className="product_image_card">
        <Image
          src={product.image}
          className="product_image"
          alt={product.title}
          title={product.title}
          width={800}
          height={400}
          loading="eager"
          priority
        />
      </div>
      <div className="product_detail">
        <div className="product_title_subtitle">
          <h2 className="product_title">
            {product.title.length <= 20
              ? product.title
              : product.title.slice(0, 20) + "..."}
          </h2>
          <p className="product_subtitle">
            <Link href={"#"} style={{ textDecoration: "underline" }}>
              Sign in
            </Link>{" "}
            or Create an account to see pricing
          </p>
        </div>
        <div className="product_wishlist_icon">
          <Image
            src={Heart}
            alt="wishlist icon"
            title="wishlist icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
