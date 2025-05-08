import React from "react";
import { Container } from "react-bootstrap";
import ItemDetails from "../../components/itemDetails/itemDetails";
import "./Features.scss";

const Features = ({ featuresTitle, featuresItems }) => {
  return (
    <Container fluid>
      <div className="title">
        <h2>{featuresTitle}</h2>
        <p></p>
      </div>
      <ItemDetails featuresItems={featuresItems} />
    </Container>
  );
};

export default Features;
