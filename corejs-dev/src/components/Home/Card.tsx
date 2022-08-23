import * as React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { CardType } from "./types/types";


function OneCard(props: CardType) {
    return (
      <Card className='card_home' style={{ width: '20rem', height: '100%', opacity: 0.9 }}>
        <Card.Body>
          <Card.Title className="card_title text-uppercase text-dark">{props.title}</Card.Title>
          <Card.Text className="homecard_text">
            {props.textRU}
          </Card.Text>
          <Link to={props.path}>
            <Button className="card_home_btn" variant="dark">Go</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
  
  export default OneCard;

