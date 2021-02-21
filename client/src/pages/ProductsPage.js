import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/message";
import Loader from "../components/loader";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {/* <Carousel /> */}
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
    </>
  );
};

export default ProductsPage;
