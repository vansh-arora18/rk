import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import DropdownLink from "./DropdownLink";
import {
  HomeIcon,
  ShoppingCartIcon,
  CubeIcon,
  ViewColumnsIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/outline";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title : "rk Confectionery"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header className="sticky top-0 z-auto bg-white">
          <nav className="flex  h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">RK Confectionery</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block hh">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <div className="md:invisible flex flex-nowrap content-evenly justify-between sticky bg-white bottom-0  h-12 shadow-inner my-4">
          <div className="basis-1/3 flex  flex-col justify-items-center items-center  align-center justify-center">
            <Link href="/">
              <a>
                <HomeIcon class="w-8 h-6 text-grey-100" />
                <p className="text-xs text-grey-600">Home</p>
              </a>
            </Link>
          </div>
          <div className="basis-1/3 flex  flex-col justify-items-center items-center  align-center justify-center">
            <Link href="/cart">
              <a className="p-2">
                  <ShoppingCartIcon className="w-8 h-6 text-grey-600" />
                <p className="text-xs text-grey-600">Cart</p>
              </a>
            </Link>
          </div>
          <div className="basis-1/3 flex  flex-col justify-items-center items-center  align-center justify-center">
            <Link href="/order-history">
              <a>
                <CubeIcon className="w-8 h-6 text-grey-600" />
                <p className="text-xs text-grey-600">Orders</p>
              </a>
            </Link>
          </div>

          <Link href="/#category">
            <a className="basis-1/3 flex  flex-col justify-items-center items-center  align-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 h-6 font-bold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                ></path>
              </svg>
              <p className="text-xs text-grey-600">Categories</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
