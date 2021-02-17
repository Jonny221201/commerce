import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/message';
import Loader from '../components/loader';
import { getOrderDetails } from '../actions/orderActions'

const OrderPage = ({ match, cart }) => {
    const orderId = match.params.id

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()




    const orderDetails = useSelector(state => state.orderDetails) 
    const { order, loading, error } = orderDetails

    const orderPay = useSelector(state => state.orderPay) 
    const { loading: loadingPay, success: successPay } = orderPay


    if(!loading) {
  // calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}
order.itemsPrice = addDecimals(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    }
      

    useEffect(() => {

        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)

        }

        if(!order || successPay) {
            dispatch(getOrderDetails(orderId))
        } else if(!order.isPaid) {
            if(!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }

    }, [dispatch, orderId, successPay, order])


    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
        <h1>Order {order._id}</h1>
        <Row>
                   <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Delivery</h2>
                                <p><strong>Name: </strong> {order.user.name}</p>
                                <p><strong>Email: </strong><a href={`mailto:${order.user.mail}`}>{order.user.email}</a></p>
                                <p>
                                    <strong>Address: </strong>
                                    {order.deliveryAddress.address},
                                    {order.deliveryAddress.city},
                                    {order.deliveryAddress.postalCode},
                                    {order.deliveryAddress.country}
                                </p>
                                {order.isDelivered ? ( <Message variant='success'>Delivered on {order.deliveredAt}</Message> ) : ( <Message variant='danger'>Not Delivered</Message>)}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                <strong>Method: </strong>
                                {order.paymentMethod}
                                </p>
                                {order.isPaid ? ( <Message variant='success'>Paid on {order.paidAt}</Message> ) : ( <Message variant='danger'>Not Paid</Message>)}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? <Message>Order is Empty</Message> : (
                                    <ListGroup variant='flush'>
                                        {order.orderItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/products/${item.product}`}></Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x ${item.price} = ${item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                   </Col>
                   <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>${order.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Delivery</Col>
                                        <Col>${order.deliveryPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tax</Col>
                                        <Col>${order.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>${order.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                               
                            </ListGroup>
                        </Card> 
                   </Col>
               </Row>
    </>
       
    
}

export default OrderPage

