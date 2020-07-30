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
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
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
                <option value="Burglary">Burglary</option>
                <option value="Homicide">Homicide</option>
                <option value="Larceny-Theft">Larceny-Theft</option>
                <option value="Motor Vehicle Theft">Motor Vehicle Theft</option>
                <option value="Rape">Rape</option>
                <option value="Robbery">Robbery</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>Precint</Col>
            <Col sm={9}>
              <FormControl
                componentClass="select" multiple
                name="Precint"
                value="Precint"
                onChange={this.onChange}
              >
                <option value="E">E</option>
                <option value="N">N</option>
                <option value="SE">S</option>
                <option value="SW">SW</option>
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
