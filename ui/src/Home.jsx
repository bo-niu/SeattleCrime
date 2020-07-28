import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap.jsx';
import HomeFilter from './HomeFilter.jsx';

class Home extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={3}><HomeFilter /></Col>
          <Col lg={9}><GoogleMap /></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
