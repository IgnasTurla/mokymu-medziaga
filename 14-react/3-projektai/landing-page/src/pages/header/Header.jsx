import { Container } from "react-bootstrap";
import "./Header.scss";

const Header = ({ title, subtitle, button }) => {
  return (
    <Container fluid>
      <div className="header-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{button}</button>
      </div>
    </Container>
  );
};

export default Header;
