import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/message';
import Loader from '../components/loader';


const Products = () => {


    const dispatch = useDispatch(); 

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
   

    useEffect(() => {
        dispatch(listProducts())
      
    }, [dispatch])

    return (
     <>
        {/* <Carousel /> */}
        <h1>Latest Products</h1>
        {loading ? ( <Loader /> ) : error ? ( <h1><Message variant='danger' /></h1> ) : 
          (<Row>
          {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
              </Col>
          ))};
      </Row>)

        }
      
     </>
    )
}


export default Products
