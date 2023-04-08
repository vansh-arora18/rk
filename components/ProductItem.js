/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="border rounded h-63 overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className=" shadow h-1/2 object-contain w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center text-xs leading-3 mt-2">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-sm text-auto text-center mt-1">
              {product.name}
            </h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        {product.cutPrice === product.price ? (
          <p className="font-bold text text-sm text-lg ">₹{product.cutPrice}</p>
        ) : (
          <p className="font-bold text text-sm text-lg ">
            ₹{product.cutPrice}
            <span className="line-through font-normal px-1 h-1 text-sm ">
              ₹{product.price}
            </span>
            <span className="font-normal text-sm text-green-600">
              (
              {Math.round(
                ((product.price - product.cutPrice) / product.price) * 100
              )}
              % off)
            </span>
          </p>
        )}
        {/* <p className="font-bold text text-sm text-lg ">
          ₹{product.cutPrice}
          <span className="line-through font-normal px-1 h-1 text-sm ">
            ₹{product.price}
          </span>{" "}
          <span className="font-normal text-sm text-green-600">
            (
            {Math.round(
              ((product.price - product.cutPrice) / product.price) * 100
            )}
            % off)
          </span>
        </p> */}
        <button
          className="primary-button mt-2"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
