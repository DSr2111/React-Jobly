import { React, useContext, useState } from 'react';
import { JoblyApi } from '../api.js';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './SearchBar.js';

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  async function getCompanies(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div>
      <Container>
        <SearchBar filter={getCompanies} />
      </Container>
    </div>
  );
}
