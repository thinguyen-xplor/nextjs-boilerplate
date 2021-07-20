import React, { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

import store from 'core/store';
import { Languages } from 'common/constants';
import { LangContext } from 'common/contexts';
import enLang from 'languages/en.json';
import viLang from 'languages/vi.json';
import 'styles/base.scss';

const languages = Object.freeze({
  [Languages.EN]: enLang,
  [Languages.VI]: viLang,
});

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [usedLang, setUsedLang] = useState(Languages.EN);

  const changeLang = (lang: string) => {
    setUsedLang(lang);
  };

  const changeLangProviderValue = {
    usedLang,
    changeLang,
  };

  return (
    <IntlProvider key={usedLang} locale={usedLang} messages={languages[usedLang]}>
      <LangContext.Provider value={changeLangProviderValue}>
        <Head>
          <title>Space coach UI boilerplate</title>
          <meta name="description" content="Setup for a new boilerplate" />
        </Head>
        <Component {...pageProps} />
      </LangContext.Provider>
    </IntlProvider>
  );
};

export default store.withRedux(MyApp);
