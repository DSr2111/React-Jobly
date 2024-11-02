import { React, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function CompanyCard({ company }) {
  return (
    <div>
      <Card className="m-2">
        <CardBody className="text-center">
          <CardTitle tag="h3">{company.name}</CardTitle>
          <CardText>{company.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CompanyCard;
