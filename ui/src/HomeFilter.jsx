import React from 'react';
import DateAndTimePickers from './DateAndTimePickers.jsx';

class HomeFilter extends React.Component {
  static async fetchData(match, search, showError) {
    return null;
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>This left part is for filter</div>
        <br />
        <br />
        <div>start date</div>
        <DateAndTimePickers />
        <div>end date</div>
        <DateAndTimePickers />
      </div>
    );
  }
}

export default HomeFilter;
