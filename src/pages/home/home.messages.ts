import { defineMessages } from 'react-intl';

import { PureMessage } from 'common/types';
import generalMessages from 'common/messages';

const localMessages = defineMessages({
  getMore: {
    defaultMessage: 'Get more',
  },
});

const commonMessages = {
  hi: generalMessages.hi,
};

export default {
  ...localMessages,
  ...commonMessages,
} as PureMessage;
