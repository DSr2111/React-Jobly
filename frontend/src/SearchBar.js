import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'reactstrap';

function SearchBar({ filter, placeholder = 'Enter search term' }) {
  const INITIAL_STATE = {
    searchTerm: '',
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filter(formData.searchTerm.trim() || null);
    setFormData(INITIAL_STATE);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs="9">
          <Input
            id="searchTerm"
            name="searchTerm"
            type="text"
            placeholder={placeholder}
            value={formData.searchTerm}
            onChange={handleChange}
          />
        </Col>
        <Col xs="auto">
          <Button color="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
