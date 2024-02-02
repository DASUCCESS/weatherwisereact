import React from 'react';

const OutdoorActivities = ({ condition }) => {
  
  const suggestions = condition === 'Clear' ? 'Perfect day for outdoor activities!' : 'Consider indoor activities';

  return (
    <div>
      <h3>Outdoor Activities</h3>
      <p>{suggestions}</p>
    </div>
  );
};

export default OutdoorActivities;
