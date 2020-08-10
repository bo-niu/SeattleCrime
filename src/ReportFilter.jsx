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
                <option key={1} value="Assault">Assault</option>
                <option key={2} value="Bias Incident">Bias Incident</option>
                <option key={3} value="Disorderly Conduct">Disorderly Conduct</option>
                <option key={4} value="DUI">DUI</option>
                <option key={5} value="Burglary">Burglary</option>
                <option key={6} value="Homicide">Homicide</option>
                <option key={7} value="Injury">Injury</option>
                <option key={8} value="Liquor Violation">Liquor Violation</option>
                <option key={9} value="Narcotics">Narcotics</option>
                <option key={10} value="Pickpocket">Pickpocket</option>
                <option key={11} value="Robbery">Robbery</option>
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
                <option key="B" value="B">B</option>
                <option key="C" value="C">C</option>
                <option key="D" value="D">D</option>
                <option key="E" value="E">E</option>
                <option key="F" value="F">F</option>
                <option key="G" value="G">G</option>
                <option key="J" value="J">J</option>
                <option key="K" value="K">K</option>
                <option key="L" value="L">L</option>
                <option key="M" value="M">M</option>
                <option key="N" value="N">N</option>
                <option key="O" value="O">O</option>
                <option key="Q" value="Q">Q</option>
                <option key="R" value="R">W</option>
                <option key="S" value="S">S</option>
                <option key="U" value="U">U</option>
                <option key="W" value="W">W</option>
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
