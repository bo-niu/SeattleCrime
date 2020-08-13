/* eslint linebreak-style: ["error", "windows"] */

import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label,
} from 'recharts';

function translate(datas) {
  return datas.map((data) => {
    const newData = {};
    newData.name = data.year;
    newData.count = data.count;
    return newData;
  });
}

export default class ReChart extends PureComponent {
  render() {
    const { data } = this.props;
    const dataForChart = translate(data);
    // console.log('dataForChart: ');
    // console.log(dataForChart);
    return (
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          width={500}
          height={500}
          data={dataForChart}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="year" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'crime count', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
