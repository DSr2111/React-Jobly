import { React, useContext, useState } from 'react';
import Context from './Context';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

function JobCard() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <ListGroup>
            <ListGroupItem></ListGroupItem>
            <ListGroupItem></ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default JobCard;
