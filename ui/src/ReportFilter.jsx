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
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Report Filter</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>Year</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select"
                name="Year"
                value="Year"
                onChange={this.onChange}
              >
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>Crime Type</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select" multiple
                name="Crime Type"
                value="Crime Type"
                onChange={this.onChange}
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
            <Col componentClass={ControlLabel} sm={3}>Precint</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select" multiple
                name="District"
                value="District"
                onChange={this.onChange}
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
