/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap.jsx';
import HomeFilter from './HomeFilter.jsx';
import graphQLFetch from './graphQLFetch.js';
import * as util from './util.js';
import store from './store.js';
import withToast from './withToast.jsx';

const crimeLimit = 200;

class Home extends React.Component {
  static async fetchData(match, search, showError) {
    const vars = util.getVarsFromHomeURL(search);
    const inputVars = { input: vars };
    let query = `query crimeCount($input: FilterInput!) {
      crimeCount(input: $input)
    }`;
    const result = {};
    const countObj = await graphQLFetch(query, inputVars, showError);
    if (countObj.crimeCount > crimeLimit) {
      result.filtrateCrimes = [];
    } else {
      query = `query filtrateCrimes($input: FilterInput!) {
        filtrateCrimes(input: $input) {
          _id OffenseType OffenseDescription ReportDate OffenseStartDate OffenseEndDate Block CensusTract Longitude Latitude
          Beat District
        }
      }`;
      const data = await graphQLFetch(query, inputVars, showError);
      result.filtrateCrimes = data.filtrateCrimes;
    }
    result.count = countObj.crimeCount;
    return result;
  }

  constructor(props) {
    super(props);
    const initialDate = store.initialData || { count: null, filtrateCrimes: null };
    const { count: crimeCount } = initialDate;
    if (crimeCount === null || crimeCount <= crimeLimit) {
      const { filtrateCrimes: crimes } = initialDate;
      this.state = { crimes };
    } else {
      this.state = { crimes: [] };
    }
    this.state.filterDisabled = false;
    delete store.initialData;
  }

  componentDidMount() {
    const { crimes } = this.state;
    if (crimes == null) this.loadData();
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
    const {
      location: { search }, match, showError, showSuccess,
    } = this.props;
    this.setState({ filterDisabled: true });
    const data = await Home.fetchData(match, search, showError);
    if (data) {
      this.setState({ crimes: data.filtrateCrimes });
    }
    if (data.count > crimeLimit) {
      showError(`We found ${data.count} crimes in the range, which exceeds the limit of cases showing on the map (${crimeLimit}). Please reduce your searching range.`);
    } else {
      showSuccess(`Search succeeds. We found ${data.count} crimes in the range.`);
    }
    this.setState({ filterDisabled: false });
  }

  render() {
    const { crimes, filterDisabled } = this.state;
    if (crimes == null) return null;
    return (
      <div>
        <Row>
          <Col lg={3}>
            <HomeFilter disabled={filterDisabled} />
          </Col>
          <Col lg={9}><GoogleMap crimes={crimes} /></Col>
        </Row>
      </div>
    );
  }
}

const HomeWithToast = withToast(Home);
HomeWithToast.fetchData = Home.fetchData;

export default HomeWithToast;
