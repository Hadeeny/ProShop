import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  },[])
  /* note that the products imported is being used as a VARIABLE and not a
        component, as products.js doesn't contain an import or export
        statement, that's why we can map on it without using props as we would
        have done with a component */
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
