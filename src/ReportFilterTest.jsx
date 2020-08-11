/* eslint-disable max-len */
import React from 'react';
import {
  Col, Panel, Form, FormGroup, FormControl, ControlLabel,
  ButtonToolbar, Button,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers.jsx';
import { getVarsFromReportURL } from './util.js';
// import { func } from 'prop-types';

function getBeatOption(district) {
  const beatList = [`${district}1`, `${district}2`, `${district}3`];
  const newList = beatList.map((beat, i) => <option value={beat} key={i.toString()}>{beat}</option>);
  newList.unshift(<option key="All" value="All">All</option>);
  return newList;
}

function getDistrictOptions() {
  const districtList = ['B', 'C', 'D', 'E', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'O', 'Q', 'R', 'S', 'U', 'W'];
  const newList = districtList.map((dist, i) => <option value={dist} key={i.toString()}>{dist}</option>);
  newList.unshift(<option key="All" value="All">All</option>);
  return newList;
}

function getTypeOptions() {
  const typeList = ['TRESPASS', 'BIKE THEFT', 'ROBBERY', 'NARCOTICS', 'DISTURBANCE', 'SHOPLIFTING', 'THREATS', 'STOLEN PROPERTY', 'WARRANT ARREST', 'FRAUD', 'ASSAULT', 'VEHICLE THEFT', 'PROPERTY DAMAGE', 'BURGLARY', 'CAR PROWL'];
  const newList = typeList.map((type, i) => <option value={type} key={i.toString()}>{type}</option>);
  newList.unshift(<option key="All" value="All">All</option>);
  return newList;
}

class ReportFilter extends React.Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    const vars = getVarsFromReportURL(search);
    this.state = {
      startDate: vars.startDate,
      endDate: vars.endDate,
      district: vars.district,
      beat: vars.beat,
      type: vars.type,
    };
    if (vars.district === 'All') this.state.beatDisabled = true;
    else this.state.beatDisabled = false;
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onBeatChange = this.onBeatChange.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.onApplyFilter = this.onApplyFilter.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.setType = this.setType.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.setForm();
    }
  }

  onApplyFilter(e) {
    e.preventDefault();
    const { history, urlBase } = this.props;
    const params = new URLSearchParams();
    const {
      startDate, endDate, district, beat, type,
    } = this.state;
    params.set('startDate', startDate.toISOString());
    params.set('endDate', endDate.toISOString());
    params.set('district', district);
    params.set('beat', beat);
    params.set('type', type);
    const search = params.toString ? `?${params.toString()}` : '';
    history.push({ pathname: urlBase, search });
  }

  onDistrictChange(e) {
    this.setDistrict(e.target.value);
    if (e.target.value === 'All') this.setState({ beatDisabled: true });
    else this.setState({ beatDisabled: false });
    const { beat } = this.state;
    const currentDistrict = e.target.value;
    if (currentDistrict !== 'All' && currentDistrict !== beat[0]) {
      this.setState({ beat: 'All' });
    }
  }

  onBeatChange(e) {
    this.setBeat(e.target.value);
  }

  onTypeChange(e) {
    this.setType(e.target.value);
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

  setType(t) {
    this.setState({ type: t });
  }

  setForm() {
    const { location: { search } } = this.props;
    const vars = getVarsFromReportURL(search);
    this.setStartDate(vars.startDate);
    this.setEndDate(vars.endDate);
    this.setDistrict(vars.district);
    this.setBeat(vars.beat);
    this.setType(vars.type);
    if (vars.district === 'All') this.setState({ beatDisabled: true });
    else this.setState({ beatDisabled: false });
  }

  render() {
    const {
      startDate, endDate, district, beat, beatDisabled, type,
    } = this.state;
    const { disabled } = this.props;
    const beatOptions = getBeatOption(district);
    const districtOptions = getDistrictOptions();
    const typeOptions = getTypeOptions();
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>This is for filter</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={this.onApplyFilter}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>StartDate</Col>
              <Col sm={9}>
                <DateAndTimePickers value={startDate} setValue={this.setStartDate} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>EndDate</Col>
              <Col sm={9}>
                <DateAndTimePickers value={endDate} setValue={this.setEndDate} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>Type</Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="Type"
                  value={type}
                  onChange={this.onTypeChange}
                >
                  {typeOptions}
                </FormControl>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>District</Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="District"
                  value={district}
                  onChange={this.onDistrictChange}
                >
                  {districtOptions}
                </FormControl>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>Beat</Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="Beat"
                  value={beat}
                  onChange={this.onBeatChange}
                  disabled={beatDisabled}
                >
                  {beatOptions}
                </FormControl>
              </Col>
            </FormGroup>
            <ButtonToolbar>
              <Button
                disabled={disabled}
                bsStyle="primary"
                type="submit"
              >
                Apply
              </Button>
            </ButtonToolbar>
          </Form>
        </Panel.Body>
        <Panel.Footer>
          <h2>Note:</h2>
          <br />
          <div>Our data is collected from online open data. Therefore, the result only represents our own database.</div>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default withRouter(ReportFilter);
