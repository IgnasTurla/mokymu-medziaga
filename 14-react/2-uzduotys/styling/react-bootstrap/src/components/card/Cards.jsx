
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { useState } from 'react';
import Buttons from '../button/Buttons';

const Cards = () => {
    const [cardsMas] = useState([
        {
          title: 'Free',
          price: '$0',
           value: ' / mo',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, itaque!',
          buttonText: 'Sign up for free'
        },
        {
          title: 'Pro',
          price: '$15',
          value: ' / mo',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, itaque!',
          buttonText: 'Get started'
        },
        {
          title: 'Enterprise',
          price: '$29',
          value: ' / mo',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, itaque!',
          buttonText: 'Contact us'
        }
      ]);
      
        return (
            <div className='cards'>
                {
                    cardsMas.map((card, index) => (
                        <Card  className="p-0 m-0" key={index} style={{ width: '18rem' }}>
                        <Card.Body className="p-0 m-0">
                          <Card.Title className='bg-light p-3'>{card.title}</Card.Title>
                          <Card.Subtitle><span className='cardPrice'>{card.price}</span><span className='cardValue'>{card.value}</span></Card.Subtitle>
                          <Card.Text>{card.text}</Card.Text>
                          <Buttons buttonText={card.buttonText} index={index} />
                        </Card.Body>
                      </Card>   
                    ))
                }
             
            </div>
        );
};

export default Cards;