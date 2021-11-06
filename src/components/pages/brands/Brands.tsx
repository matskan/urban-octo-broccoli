import React from 'react';
import brands from './styles/brands.module.scss';
import icons from './styles/icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAirbnb,
  faGit,
  faPinterest,
  faVk,
} from '@fortawesome/free-brands-svg-icons';

export const Brands: React.VFC = () => {
  return (
    <div className={icons.root}>
      <div className={icons.airbnb}>
        <FontAwesomeIcon icon={faAirbnb} className={brands.airbnb} />
      </div>

      <div className={icons.git}>
        <FontAwesomeIcon icon={faGit} className={brands.git} />
      </div>

      <div className={icons.pinterest}>
        <FontAwesomeIcon icon={faPinterest} className={brands.pinterest} />
      </div>

      <div className={icons.vk}>
        <FontAwesomeIcon icon={faVk} className={brands.vk} />
      </div>
    </div>
  );
};
