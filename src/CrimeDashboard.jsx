import React from 'react';

const CrimeDashboard = (props) => {
  const { crime } = props;
  if(crime === null || crime === undefined) {
    return null;
  }
  return (
    <div>
      <div>
        <b>Offense Type: </b>
        {`${crime.OffenseType}`}
      </div>
      <div>
        <b>Offense Description: </b>
        {`${crime.OffenseDescription}`}
      </div>
      <div>
        <b>Report Date: </b>
        {`${crime.ReportDate}`}
      </div>
      <div>
        <b>Offense Start Date: </b>
        {`${crime.OffenseStartDate}`}
      </div>
      <div>
        <b>Offense End Date: </b>
        {`${crime.OffenseEndDate}`}
      </div>
      <div>
        <b>Block: </b>
        {`${crime.Block}`}
      </div>
      <div>
        <b>District: </b>
        {`${crime.District}`}
      </div>
      <div>
        <b>Beat: </b>
        {`${crime.Beat}`}
      </div>
      <div>
        <b>2000 Census Tract: </b>
        {`${crime.CensusTract}`}
      </div>
      <div>
        <b>Longitude: </b>
        {`${crime.Longitude}`}
      </div>
      <div>
        <b>Latitude: </b>
        {`${crime.Latitude}`}
      </div>
    </div>
  );
};

export default CrimeDashboard;
