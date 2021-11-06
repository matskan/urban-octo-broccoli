import React from 'react';
import styles from './nav.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <div>
      <nav className={styles.navigation}>
        <Link className={styles.link} to="shadows">
          Shadows
        </Link>

        <Link className={classNames(styles.link, styles.home)} to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};
