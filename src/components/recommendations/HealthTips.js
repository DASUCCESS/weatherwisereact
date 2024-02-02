import React from 'react';

const HealthTips = ({ humidity }) => {
  const tips = humidity > 70 ? 'Stay hydrated and cool' : 'Enjoy the pleasant weather responsibly';

  return (
    <div>
      <h3>Health Tips</h3>
      <p>{tips}</p>
    </div>
  );
};

export default HealthTips;
