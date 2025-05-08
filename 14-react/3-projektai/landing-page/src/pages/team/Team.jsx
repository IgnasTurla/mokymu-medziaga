import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.scss";

const Team = ({ title, description, members }) => {
  return (
    <Container fluid className="team-container">
      <div className="team-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Row className="team-grid">
        {members.map((item) => (
          <Col className="team-card" key={item.id}>
            <div className="team-card-img">
              <img src={item.image} />
            </div>

            <div className="team-card-title">
              <h2>{item.name}</h2>
              <p>{item.role}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
