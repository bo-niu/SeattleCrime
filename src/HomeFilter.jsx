import React from 'react';
import {
  Col, Panel, Form, FormGroup, FormControl, ControlLabel,
  ButtonToolbar, Button,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers.jsx';
import getVarsFromHomeURL from './util.js';

class HomeFilter extends React.Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    const vars = getVarsFromHomeURL(search);
    this.state = {
      startDate: vars.startDate,
      endDate: vars.endDate,
      district: vars.district,
      beat: vars.beat,
    };
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onBeatChange = this.onBeatChange.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.onApplyFilter = this.onApplyFilter.bind(this);
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
      startDate, endDate, district, beat,
    } = this.state;
    params.set('startDate', startDate.toISOString());
    params.set('endDate', endDate.toISOString());
    params.set('district', district);
    params.set('beat', beat);
    const search = params.toString ? `?${params.toString()}` : '';
    history.push({ pathname: urlBase, search });
  }

  onDistrictChange(e) {
    this.setDistrict(e.target.value);
  }

  onBeatChange(e) {
    this.setBeat(e.target.value);
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

  setForm() {
    const { location: { search } } = this.props;
    const vars = getVarsFromHomeURL(search);
    this.setStartDate(vars.startDate);
    this.setEndDate(vars.endDate);
    this.setDistrict(vars.district);
    this.setBeat(vars.beat);
  }

  render() {
    const {
      startDate, endDate, district, beat,
    } = this.state;
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
              <Col componentClass={ControlLabel} sm={3}>District</Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="District"
                  value={district}
                  onChange={this.onDistrictChange}
                >
                  <option value="E">E</option>
                  <option value="G">G</option>
                  <option value="Q">Q</option>
                  <option value="B">B</option>
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
                >
                  <option value="E2">E2</option>
                  <option value="G2">G2</option>
                  <option value="Q2">Q2</option>
                  <option value="B2">B2</option>
                </FormControl>
              </Col>
            </FormGroup>
            <ButtonToolbar>
              <Button
                disabled={false}
                bsStyle="primary"
                type="submit"
              >
                Apply
              </Button>
            </ButtonToolbar>
          </Form>
        </Panel.Body>
        <Panel.Footer>
          This is the Panel.Footer
        </Panel.Footer>
      </Panel>
    );
  }
}

export default withRouter(HomeFilter);
