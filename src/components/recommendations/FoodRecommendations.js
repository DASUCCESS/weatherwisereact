import React from 'react';

const FoodRecommendations = ({ condition }) => {
  
  const suggestions = condition === 'Rainy' ? 'Cozy up with some comfort food' : 'Enjoy a refreshing meal';

  return (
    <div>
      <h3>Food Recommendations</h3>
      <p>{suggestions}</p>
    </div>
  );
};

export default FoodRecommendations;
