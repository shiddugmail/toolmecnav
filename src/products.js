import React from "react";
import NavLinks from "./navbarlinks";
import { Container, Row, Card } from 'react-bootstrap';

const Products = () => {
  return (
      <Container>
        <NavLinks />
        <Card>
        <h3>Products Page</h3>
        </Card>
      </Container>
  );
};
export default Products;