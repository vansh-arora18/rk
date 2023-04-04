import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";
import React, { useContext, useEffect, useState, useRef } from "react";

function search1() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Layout title="Place Order">
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
        />
        <button
          className=" ml-2 px-1 relative right-10"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon className="h-5 w-5"></SearchIcon>
        </button>
      </form>
    </Layout>
  );
}

export default search1;
