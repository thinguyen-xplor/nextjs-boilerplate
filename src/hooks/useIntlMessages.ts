import { useRef } from 'react';
import { useIntl, IntlShape } from 'react-intl';

import { PureMessage, FormattedMessage } from 'common/types';

const generateMessages = (intl: IntlShape, pureMessages: PureMessage) => {
  const messagesKeys = Object.keys(pureMessages);

  return messagesKeys.reduce((acc: FormattedMessage, messageKey: string) => {
    acc[messageKey] = intl.formatMessage({ id: pureMessages[messageKey].id });

    return acc;
  }, {});
};

export default (pureMessages: PureMessage): FormattedMessage => {
  const intl = useIntl();
  const messageRef = useRef(generateMessages(intl, pureMessages));

  return messageRef.current;
};
