import React from "react";
import NavLinks from './navbarlinks';
import { Container, Row, Card } from 'react-bootstrap';

import './css/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

const ProductTwo = () => {
  return (
    <Container>
      <NavLinks />
      <div className='card'>
        <h3>Products</h3>
        <h3>Product Two !!!!!!</h3>
      </div>
    </Container>
  );
}
export default ProductTwo;