import React from 'react';
import { noop } from 'lodash';

import { Languages } from 'common/constants';

export interface ILangContextValue {
  usedLang: string;
  changeLang: (lang: string) => void;
}

export const LangContext = React.createContext<ILangContextValue>({
  usedLang: Languages.EN,
  changeLang: noop,
});
