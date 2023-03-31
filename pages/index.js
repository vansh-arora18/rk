import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Home({ products, featuredProducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to the cart");
  };

  var categories = new Set();

  // useEffect(() => {
  const fun = () => {
    products.map((product) => {
      categories.add(product.category);
    });

    categories = Array.from(categories);
  };
  fun();
  // }, [products]);

  console.log(categories);

  return (
    <Layout title="Home Page">
      <Carousel showThumbs={false} autoPlay>
        {featuredProducts.map((product) => (
          <div key={product._id} className="z-10">
            <Link href={`/product/${product.slug}`} passHref>
              <a className="flex">
                <img src={product.banner} alt={product.name} />
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
      <div id="category">
        <h1 className="text-bold my-7">Shop By Categories</h1>
        <div className="grid grid-cols-3 gap-1 md:grid-cols-5 lg:grid-cols-10 mt-4">
          {categories.map((category) => {
            return (
              <>
                <Link href={`/productItem/${category}`}>
                  <a className="border shadow rounded">
                    <img
                      src={`../images/${category}.jpg`}
                      alt="chips"
                      className="rounded shadow"
                    />
                  </a>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <h2 className="h2 my-7">Latest Products</h2>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-5 lg:grid-cols-7">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
    },
  };
}
