import React from "react";
import * as SlIcons from "react-icons/sl";
import Card from "react-bootstrap/Card";

const ItemDetails = ({ featuresItems }) => {
  return (
    <div className="features-container">
      {featuresItems.map((item, index) => {
        const IconComponent = SlIcons[item.icon];
        return (
          <Card key={index}>
            <div className="image">
              <div>{<IconComponent />}</div>
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetails;
