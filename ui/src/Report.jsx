import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReportFilter from './ReportFilter.jsx';
import ReChart from './ReChart.jsx';
// import Plotly from './Plotly.jsx';

class Report extends React.Component {
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
          <Col lg={3}><ReportFilter /></Col>
          <Col lg={9}><ReChart /></Col>
        </Row>
      </div>
    );
  }
}

export default Report;
