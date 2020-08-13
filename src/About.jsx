import React from 'react';
import store from './store.js';
import graphQLFetch from './graphQLFetch.js';

export default class About extends React.Component {
  static async fetchData() {
    const data = await graphQLFetch('query {about}');
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = store.initialData ? store.initialData.about : null;
    delete store.initialData;
    this.state = { apiAbout };
  }

  async componentDidMount() {
    const { apiAbout } = this.state;
    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({ apiAbout: data.about });
    }
  }

  render() {
    const { apiAbout } = this.state;
    return (
      <div>
        <div className="text-center">
          <h3>Seattle crime data visualization project</h3>
        </div>
        <h4>Dataset - https://www.kaggle.com/sam/seattle-crime</h4>
        <h4>For our project, we are proposing to integrate the Seattle Crime dataset from Kaggle with the Google Maps API. This project would be beneficial for Police departments and also for law/policy makers to help determine possible funding allocations.</h4>
        <h4>Features</h4>
        <ul class="list-group">
          <li class="list-group-item">Login page using Google</li>
          <li class="list-group-item">Visualize crime data on google map</li>
          <li class="list-group-item">Filter crime by time, type and location on Home page</li>
          <li class="list-group-item">A visualized chart to show the trend of crimes based on user input on Report page</li>
          <li class="list-group-item">By hovering on the legends on the map, the detailed crime information will pop up</li>
          <li class="list-group-item">By clicking the legends on the map, user will be directed to a Discussion page for detailed information and comments of that crime</li>
          <li class="list-group-item">By typing text and clicking comment button on Discussion page, user can post comments about the crime</li>
        </ul>
        <div className="text-center">
          <h4>
            {apiAbout}
          </h4>
        </div>
      </div>
    );
  }
}
