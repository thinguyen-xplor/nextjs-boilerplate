import { MessageDescriptor } from 'react-intl';

import { HomeState } from 'pages/home/home.types';

/**
 * Redux
 */

export interface RequestState {
  [key: string]: boolean;
}

export interface GlobalState {
  request: RequestState;
  home: HomeState;
}

export interface Action {
  type: string;
  payload?: any;
}

/**
 * Request
 */

export interface FormattedRequest {
  [key: string]: boolean;
}

/**
 * React Intl Message
 */

export interface PureMessage {
  [key: string]: MessageDescriptor;
}

export interface FormattedMessage {
  [key: string]: string;
}

/**
 * App
 */

export interface User {
  name: string;
  email: string;
}
