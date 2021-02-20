import React from "react";
import { IoShirtSharp } from "react-icons/io5";
import {
  GiAmpleDress,
  GiConverseShoe,
  GiPoloShirt,
  GiShorts,
  GiUnderwearShorts,
} from "react-icons/gi";
import { FaSocks } from "react-icons/fa";
import "../styles/category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="categoryContainer m-50 flex justify-start flex-wrap align-center">
        <Link
          to="/t-shirts"
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <IoShirtSharp className="font-19" />
            <p className="font-15 my-20">T-shirts</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="/dress"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <GiAmpleDress className="font-19" />
            <p className="font-15 my-20"> Dress</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="#"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <GiConverseShoe className="font-19" />
            <p className="font-15 my-20"> Shoes</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="#"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <FaSocks className="font-19" />
            <p className="font-15 my-20"> Socks</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="#"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <GiPoloShirt className="font-19" />
            <p className="font-15 my-20"> Polo</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="#"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <GiShorts className="font-19" />
            <p className="font-15 my-20"> Shorts</p>
          </div>
        </Link>
        <Link
          className="text-decoration-none lightGrey hover-darkGrey w-percent-20 my-20"
          to="#"
        >
          <div className="flex-col text-center text-spacing uppercase">
            <GiUnderwearShorts className="font-19" />
            <p className="font-15 my-20"> Underwear</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
