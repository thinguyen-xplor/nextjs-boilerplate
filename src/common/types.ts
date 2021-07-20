import { MessageDescriptor } from 'react-intl';

import { RequestState } from 'entities/request/request.types';
import { PostState } from 'entities/post/post.types';

/**
 * Redux
 */

export interface GlobalState {
  request: RequestState;
  post: PostState;
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
