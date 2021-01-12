import React from "react";
import NavLinks from './navbarlinks';
import { Container, Row, Card } from 'react-bootstrap';
import logo from './image/logo.png';

const ProductOne = () => {
  return (
    <Container>
      <NavLinks />
      <Card>
        <h3>Products</h3>
        <h3>Product One!!!!!!</h3>
        <img src = { logo } />
      </Card>
    </Container>
  );
}
export default ProductOne;