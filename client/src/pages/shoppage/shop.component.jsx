import React, {useState} from 'react';
import {SHOP_DATA as collections} from './data';
import Collection from '../../components/collection/collection.component';

import './shop.styles.scss';

const ShopPage = () => {
  const [state, setState] = useState(collections);
  return (
    <>
      {state.map(({...collectionProps}) => (
        <Collection {...collectionProps} />
    ))}
    </>
  )
};

export default ShopPage;