import React from 'react';
import { noop } from 'lodash';

import { Languages } from 'common/constants';

export interface LangContextProps {
  usedLang: string;
  changeLang: (lang: string) => void;
}

export const LangContext = React.createContext<LangContextProps>({
  usedLang: Languages.EN,
  changeLang: noop,
});
