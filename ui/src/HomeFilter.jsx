import React from 'react';
import {
  Col, Panel, Form, FormGroup, FormControl, ControlLabel,
  ButtonToolbar, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DateAndTimePickers from './DateAndTimePickers.jsx';

class HomeFilter extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onBeatChange = this.onBeatChange.bind(this);
  }

  onDistrictChange(e) {
    const { setDistrict } = this.props;
    setDistrict(e.target.value);
  }

  onBeatChange(e) {
    const { setBeat } = this.props;
    setBeat(e.target.value);
  }

  render() {
    const {
      startDate, endDate, district, beat,
      setStartDate, setEndDate,
      onApplyFilter,
    } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>This is for filter</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={onApplyFilter}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>StartDate</Col>
              <Col sm={9}>
                <DateAndTimePickers value={startDate} setValue={setStartDate} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>EndDate</Col>
              <Col sm={9}>
                <DateAndTimePickers value={endDate} setValue={setEndDate} />
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

export default HomeFilter;
