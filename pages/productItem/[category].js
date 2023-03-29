import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import ProductItem from "../../components/ProductItem";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home({ products }) {
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

  return (
    <Layout title="Home Page">
      <h2 className="h2 my-4"></h2>
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

export async function getServerSideProps(context) {
  const { params } = context;
  // console.log(params);
  const { category } = params;

  await db.connect();
  const products = await Product.find({ category }).lean();
  // console.log(products);
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
