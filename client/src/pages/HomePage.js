import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Category from "../components/category";
import Carusel from "../components/carousel";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/message";
import Loader from "../components/loader";
// import Paginate from "../components/Paginate";
import "../styles/card.css";

const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Carusel />

      {loading ? (
        <Loader />
      ) : error ? (
        <h1>
          <Message variant="danger" />
        </h1>
      ) : (
        <>
          <div className="cardContainer flex">
            {products.map((product) => (
              <div key={product._id} className="cardInfoContainer my-20">
                <Product product={product} />
              </div>
            ))}
            {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> */}
          </div>
        </>
      )}
      <Category />
    </>
  );
};

export default HomePage;
