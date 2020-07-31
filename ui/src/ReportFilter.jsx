import React from 'react';
import {
  Col, Panel, Form, FormGroup, FormControl, ControlLabel,
  ButtonToolbar, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DateAndTimePickers from './DateAndTimePickers.jsx';

class ReportFilter extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
    this.onCrimeChange = this.onCrimeChange.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
  }

  onCrimeChange(e) {
    const { setCrime } = this.props;
    setCrime(e.target.value);
  }

  onDistrictChange(e) {
    const { setDistrict } = this.props;
    setDistrict(e.target.value);
  }

  render() {
    const {crime, district, onApplyFilter} = this.props;

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Report Filter</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={this.onApplyFilter}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>Crime Type</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select" multiple
                name="Crime Type"
                value={crime}
                onChange={this.onCrimeChange}
              >
                <option value="Assault">Assault</option>
                <option value="Bias Incident">Bias Incident</option>
                <option value="Disorderly Conduct">Disorderly Conduct</option>
                <option value="DUI">DUI</option>
                <option value="Burglary">Burglary</option>
                <option value="Homicide">Homicide</option>
                <option value="Injury">Injury</option>
                <option value="Liquor Violation">Liquor Violation</option>
                <option value="Narcotics">Narcotics</option>
                <option value="Pickpocket">Pickpocket</option>
                <option value="Robbery">Robbery</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>District</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select" multiple
                name="District"
                value={district}
                onChange={this.onDistrictChange}
              >
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="J">J</option>
                <option value="K">K</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="N">N</option>
                <option value="O">O</option>
                <option value="Q">Q</option>
                <option value="R">W</option>
                <option value="S">S</option>
                <option value="U">U</option>
                <option value="W">W</option>
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
        </Panel.Footer>
      </Panel>
    );
  }
}

export default ReportFilter;
