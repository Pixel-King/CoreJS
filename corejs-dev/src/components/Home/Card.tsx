import * as React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardType } from "./types/types";

function OneCard(props: CardType) {
    return (
      <Card style={{ width: '20rem', opacity: 0.9 }}>
        <Card.Header className="text-uppercase bg-dark text-light">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.textRU}
          </Card.Text>
          <Button variant="dark">Go</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default OneCard;

