import { Container, Col, Card } from "react-bootstrap";
import * as SlIcons from "react-icons/sl";
import "./Services.scss";

const Services = ({ title, description, servicesItems }) => {
  return (
    <Container fluid className="services-container">
      <div className="services">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1>{title}</h1>
          <p className="line"></p>
          <p>{description}</p>
        </Col>

        <Col className="cards d-flex justify-content-center flex-wrap">
          {servicesItems.map((item, index) => {
            const IconComponent = SlIcons[item.icon];
            return (
              <Col key={index} className="card-item" sm={3}>
                <Card style={{ width: "18rem" }}>
                  <div className="card-icon">{<IconComponent />}</div>
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Col>
      </div>
    </Container>
  );
};

export default Services;
