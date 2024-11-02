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

function JobCard({ job }) {
  return (
    <div>
      <Card className="m-2">
        <CardBody>
          <CardTitle>{job.title}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <ListGroup>
            <ListGroupItem>{`Salary: ${job.salary || 0}`}</ListGroupItem>
            <ListGroupItem>{`Equity: ${job.equity || 0}`}</ListGroupItem>
            <Button className="mt-4"></Button>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default JobCard;
