import { snakeCase, camelCase } from 'lodash';

/**
 * Types
 */

interface ActionResult {
  status: string;
  data?: any;
}

interface FlattenRequestAction {
  [key: string]: any;
}

/**
 * Handle
 */

const flattenRequestAction = (actionType: string): FlattenRequestAction => {
  if (typeof actionType !== 'string') {
    throw new Error('Invalid action type when flattening a request action');
  }

  const standardizedType = snakeCase(actionType).toUpperCase();
  const typeStart = `${standardizedType}_START`;
  const typeSuccess = `${standardizedType}_SUCCESS`;
  const typeFailed = `${standardizedType}_FAILED`;

  const standardizedAction = camelCase(actionType);
  const actionNameStart = `${standardizedAction}Start`;
  const actionNameSuccess = `${standardizedAction}Success`;
  const actionNameFailed = `${standardizedAction}Failed`;

  const actionStart = (params?: any) => ({
    type: typeStart,
    payload: params,
  });

  const actionSuccess = (result: ActionResult) => ({
    type: typeSuccess,
    status: result.status,
    payload: result.data,
  });

  const actionFailed = (error: ActionResult) => ({
    type: typeFailed,
    status: error.status,
    payload: error.data,
  });

  return {
    [typeStart]: typeStart,
    [typeSuccess]: typeSuccess,
    [typeFailed]: typeFailed,
    [actionNameStart]: actionStart,
    [actionNameSuccess]: actionSuccess,
    [actionNameFailed]: actionFailed,
  };
};

export default flattenRequestAction;
