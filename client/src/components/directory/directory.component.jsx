import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {sections} from './data';
import './directory.styles.scss';

const Directory = () => {
  const [state, setState] = useState(sections);
  return (
    <div className="directory-menu">
      {state.map(({...sectionProps}) => (
          <MenuItem {...sectionProps} />
        ))};
    </div>
  )
}

export default Directory;