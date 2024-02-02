import React from 'react';

const ClothingSuggestions = ({ temperatureC }) => {
 
  const suggestions = temperatureC > 20 ? 'Light clothing recommended' : 'Wear layers and bring a jacket';

  return (
    <div>
      <h3>Clothing Suggestions</h3>
      <p>{suggestions}</p>
    </div>
  );
};

export default ClothingSuggestions;
