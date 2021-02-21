import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "../components/card";
import Category from "../components/category";
import Carusel from "../components/carousel";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/message";
import Loader from "../components/loader";
import Paginate from "../components/Paginate";

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
    <Router>
      <Route path="/" exact component={Carusel} />
      <Route path="/" exact component={Card} />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>
          <Message variant="danger" />
        </h1>
      ) : (
          <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
      <Route path="/" exact component={Category} />
    </Router>
  );
};

export default HomePage;
