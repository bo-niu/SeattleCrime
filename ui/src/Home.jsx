/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap.jsx';
import HomeFilter from './HomeFilter.jsx';
import graphQLFetch from './graphQLFetch.js';

class Home extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
    this.state = {
      startDate: new Date('2000-01-01T00:00:00'),
      endDate: new Date('2000-02-01T00:00:00'),
      district: 'G',
      beat: 'G2',
      crimes: [],
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.setDistrict = this.setDistrict.bind(this);
    this.setBeat = this.setBeat.bind(this);
    this.setCrimes = this.setCrimes.bind(this);
    this.onApplyFilter = this.onApplyFilter.bind(this);
  }

  async onApplyFilter(e) {
    e.preventDefault();
    console.log('all params are: (this.state)');
    console.log(this.state);
    console.log('start to search.');
    const query = `query filtrateCrimes($input: FilterInput!) {
      filtrateCrimes(input: $input) {
        OffenseType OffenseDescription ReportDate OffenseStartDate OffenseEndDate Block CensusTract Longitude Latitude
      }
    }`;
    const {
      startDate, endDate, district, beat,
    } = this.state;
    const queryParams = {
      startDate, endDate, district, beat,
    };
    console.log('queryParams is:');
    console.log(queryParams);
    const result = await graphQLFetch(query, {
      input: queryParams,
    }, null);
    console.log('result get!!!!!!');
    console.log(result);
  }

  setStartDate(date) {
    this.setState({ startDate: date });
  }

  setEndDate(date) {
    this.setState({ endDate: date });
  }

  setDistrict(dist) {
    this.setState({ district: dist });
  }

  setBeat(b) {
    this.setState({ beat: b });
  }

  setCrimes(c) {
    this.setState({ crimes: c });
  }

  render() {
    const {
      startDate, endDate, district, beat, crimes,
    } = this.state;
    return (
      <div>
        <Row>
          <Col lg={3}>
            <HomeFilter
              startDate={startDate}
              endDate={endDate}
              district={district}
              beat={beat}
              setStartDate={this.setStartDate}
              setEndDate={this.setEndDate}
              setBeat={this.setBeat}
              setDistrict={this.setDistrict}
              onApplyFilter={this.onApplyFilter}
            />
          </Col>
          <Col lg={9}><GoogleMap crimes={crimes} /></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
