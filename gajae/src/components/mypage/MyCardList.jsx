import React from 'react';
import MyCardRow from './MyCardRow';

const MyCardList = ({ cards }) => {
  return <>{Array.isArray(cards) && cards.map((card, index) => <MyCardRow key={index} card={card} />)}</>;
};

export default MyCardList;
