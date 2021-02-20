import React from 'react'
import Card from '../components/card'
import Category from '../components/category'
import Carusel from "../components/carousel";
import Products from '../components/products';

const HomePage = () => {
    return (
        <>
            <Carusel />
            <Card />
            <Products />
            <Category />
        </>
    )
}

export default HomePage
