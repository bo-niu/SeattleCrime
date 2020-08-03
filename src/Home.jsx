/* eslint-disable no-undef */
/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap.jsx';
import HomeFilter from './HomeFilter.jsx';
import graphQLFetch from './graphQLFetch.js';
import getVarsFromHomeURL from './util.js';

const crimeLimit = 200;

class Home extends React.Component {
  static async fetchData(match, search, showError) {
    const vars = getVarsFromHomeURL(search);
    let query = `query crimeCount($input: FilterInput!) {
      crimeCount(input: $input) 
    }`;

    const count = await graphQLFetch(query, vars, showError);
    if (count > crimeLimit) {
      return null;
    }
    query = `query filtrateCrimes($input: FilterInput!) {
      filtrateCrimes(input: $input) {
        OffenseType OffenseDescription ReportDate OffenseStartDate OffenseEndDate Block CensusTract Longitude Latitude
      }
    }`;
    const data = await graphQLFetch(query, vars, showError);
    data.count = count;
    return data;
  }

  constructor(props) {
    super(props);
    const { initialData } = store;
    const { count } = initialData;
    if (count <= crimeLimit) {
      const { filtrateCrimes: crimes } = initialData;
      this.state = { crimes };
    } else {
      this.state = { crimes: [] };
    }
    delete store.initialData;
    // this.state = {
    //   startDate: new Date('2016-08-21T01:00:00'),
    //   endDate: new Date('2016-08-21T23:00:00'),
    //   district: 'B',
    //   beat: 'B2',
    //   crimes: [],
    // };
    // this.setStartDate = this.setStartDate.bind(this);
    // this.setEndDate = this.setEndDate.bind(this);
    // this.setDistrict = this.setDistrict.bind(this);
    // this.setBeat = this.setBeat.bind(this);
    // this.setCrimes = this.setCrimes.bind(this);
    // this.onApplyFilter = this.onApplyFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const { location: { search }, match, showError } = this.props;
    const data = await IssueList.fetchData(match, search, showError);
    if (data) {
      this.setState({ crimes: data.filtrateCrimes });
    }
  }

  // async onApplyFilter(e) {
  //   e.preventDefault();
  //   console.log('all params are: (this.state)');
  //   console.log(this.state);
  //   console.log('start to search.');
  //   const query = `query filtrateCrimes($input: FilterInput!) {
  //     filtrateCrimes(input: $input) {
  //       OffenseType OffenseDescription ReportDate OffenseStartDate OffenseEndDate Block CensusTract Longitude Latitude
  //     }
  //   }`;
  //   const {
  //     startDate, endDate, district, beat,
  //   } = this.state;
  //   const queryParams = {
  //     startDate, endDate, district, beat,
  //   };
  //   console.log('queryParams is:');
  //   console.log(queryParams);
  //   const result = await graphQLFetch(query, {
  //     input: queryParams,
  //   }, null);
  //   console.log('result get!!!!!!   result.filtrateCrimes:');
  //   console.log(result.filtrateCrimes);
  //   this.setState({ crimes: result.filtrateCrimes });
  // }

  // setStartDate(date) {
  //   this.setState({ startDate: date });
  // }

  // setEndDate(date) {
  //   this.setState({ endDate: date });
  // }

  // setDistrict(dist) {
  //   this.setState({ district: dist });
  // }

  // setBeat(b) {
  //   this.setState({ beat: b });
  // }

  // setCrimes(c) {
  //   this.setState({ crimes: c });
  // }

  render() {
    // const {
    //   startDate, endDate, district, beat, crimes,
    // } = this.state;
    const { crimes } = this.state;
    return (
      <div>
        <Row>
          <Col lg={3}>
            <HomeFilter />
          </Col>
          <Col lg={9}><GoogleMap crimes={crimes} /></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
