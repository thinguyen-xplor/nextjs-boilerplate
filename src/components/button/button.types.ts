import { ReactElement } from 'react';

export interface ButtonProps {
  type: string;
  className?: string;
  children: ReactElement | string;
  onClick?: () => void;
}
