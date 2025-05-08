import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Feedback.scss'

const Feedback = ({title, client}) => {

    return(
        <Container fluid>
          <h1>{title}</h1>
          <Row className='feedback-cards-container'>
            {
                client.map((item) => (
                    <Col className='feedback-card' key={item.id}>
                        <div>
                        <img src={item.icon}/>
                        </div>
                       <div className='feedback-card-info'>
                       <p>{item.description}</p>
                       <h4>{item.name}</h4>
                       </div>
                      
                    </Col>
                ))
            }
          </Row>
        </Container>
    )
};

export default Feedback;