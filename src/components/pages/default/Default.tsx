import React from 'react';
import styles from './default.module.css';

export const Default: React.VFC = () => {
  return (
    <div className={styles.default}>
      <span className={styles.text}>Select in navigation</span>
    </div>
  );
};
