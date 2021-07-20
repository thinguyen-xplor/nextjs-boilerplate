import React, { FC } from 'react';

import styles from './card.module.scss';

const Card: FC = (props) => {
  const { children } = props;

  return <div className={styles.card}>{children}</div>;
};

export default Card;
