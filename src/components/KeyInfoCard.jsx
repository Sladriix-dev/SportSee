import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  calorie: '/assets/calorie-icon.png',
  protein: '/assets/protein-icon.png',
  carbohydrate: '/assets/carbohydrate-icon.png',
  lipid: '/assets/lipid-icon.png',
};

function KeyInfoCard({ type, value }) {
  return (
    <div className="key-info-card">
      <img src={icons[type]} alt={`${type} icon`} />
      <div>
        <p>{value}{type === 'calorie' ? 'Kcal' : 'g'}</p>
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </div>
  );
}

KeyInfoCard.propTypes = {
  type: PropTypes.oneOf(['calorie', 'protein', 'carbohydrate', 'lipid']).isRequired,
  value: PropTypes.number.isRequired,
};

export default KeyInfoCard;
