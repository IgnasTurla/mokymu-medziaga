import Container from "react-bootstrap/Container";
import { HiCheck } from "react-icons/hi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutUs.scss";
import hackerImage from "../../assets/hackerImage.jpg";

const AboutUs = ({
  title,
  description,
  whyChooseUsTittle,
  whyChooseUsItems,
}) => {
  return (
    <Container fluid>
      <Row sm={12} className="about">
        <Col className="image" sm={6}>
          <img src={hackerImage} />
        </Col>

        <Col sm={6} className="about-info">
          <Col sm={6} className="about-info-top">
            <h1>{title}</h1>
            <p>{description}</p>
          </Col>

          <Col sm={6} className="about-info-bottom">
            <h3>{whyChooseUsTittle}</h3>
            <div
              className="about-info-bottom-text"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {whyChooseUsItems.map((item, index) => {
                return (
                  <Col sm={6} key={index}>
                    <HiCheck /> {item}
                  </Col>
                );
              })}
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
