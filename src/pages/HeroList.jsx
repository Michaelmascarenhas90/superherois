import React, { useContext } from 'react';
import HeroContext from '../AppContext/context'

const HeroList = () => {
  const { data } = useContext(HeroContext);

  return (
    <ul>
      {data.map((heroi) => <li key={heroi.id}>{heroi.name}</li>)}
    </ul>
  );
}

export default HeroList;