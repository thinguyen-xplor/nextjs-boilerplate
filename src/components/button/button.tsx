import React, { FC } from 'react';
import cx from 'classnames';

import { ButtonProps } from './button.types';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { type, className, children, ...restProps } = props;

  return (
    <button type="button" className={cx(styles.button, styles[type], className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
