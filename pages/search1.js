import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";
import React, { useContext, useEffect, useState, useRef } from "react";
import Product from "../models/Product";
import db from "../utils/db";
import ProductItem from "../components/ProductItem";

function search1({ products }) {
  const [query, setQuery] = useState("");
  const [final, setFinal] = useState("");
  const router = useRouter();
  const submitHandler = (name) => {
    router.push(`/search?query=${name}&query2=${query}`);
  };

  // var data;

  // useEffect(() => {
  //   const changing = () => {
  //     data = products.filter((product) => {
  //       const searchItem = query.toLowerCase();
  //       const fullName = product.name.toLowerCase();
  //       const brand = product.brand.toLowerCase();

  //       return searchItem && (fullName.startsWith(searchItem) || brand.);
  //     });
  //   };
  //   changing();
  //   console.log(data);
  // }, [query]);

  // var mySet1 = new Set();

  const change = (name) => {
    setQuery(name);
    setFinal(name);
    console.log(final);
    submitHandler(name);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Layout title="Place Order">
      <div className="my-2 ml-1">Search Products</div>
      <form
        onSubmit={submitHandler}
        className="flex justify-center w-screen mt-2"
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-screen ml-1"
          placeholder="Search products"
          ref={inputRef}
          autoFocus
        />
        <button
          className=" ml-2 px-1 relative right-10"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon className="h-5 w-5"></SearchIcon>
        </button>
      </form>
      <div>
        {products
          .filter((product) => {
            const searchItem = query.toLowerCase();
            const fullName = product.name.toLowerCase();
            const brandName = product.brand.toLowerCase();
            {
              /* const categoryName = product.category.toLowerCase(); */
            }

            var reg = new RegExp(`${searchItem}.`, "gi");

            return searchItem && (fullName.match(reg) || brandName.match(reg));
          })
          .map((e) => {
            return (
              <button className="w-full border" onClick={() => change(e.mix)}>
                {e.name}
              </button>
            );
          })}
      </div>
    </Layout>
  );
}

export default search1;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
