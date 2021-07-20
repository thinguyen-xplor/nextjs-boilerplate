import { camelCase } from 'lodash';
import { useSelector } from 'react-redux';

import { GlobalState, FormattedRequest } from 'common/types';

const normalizeType = (actionType: string) => [
  camelCase(`is${actionType}Loading`),
  camelCase(`is${actionType}Success`),
  camelCase(`is${actionType}Failed`),
];

const useRequest = (actionTypes: string[]): FormattedRequest => {
  const requestState = useSelector((state: GlobalState) => state.request);

  return actionTypes.reduce((acc: FormattedRequest, actionType: string) => {
    const [loadingType, successType, failedType] = normalizeType(actionType);

    acc[loadingType] = requestState[`${actionType}_LOADING`];
    acc[successType] = requestState[`${actionType}_SUCCESS`];
    acc[failedType] = requestState[`${actionType}_FAILED`];

    return acc;
  }, {});
};

export default useRequest;
