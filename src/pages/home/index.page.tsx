import React, { useContext } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { get } from 'lodash';

import { wrapper } from 'core/store';
import { GlobalState } from 'common/types';
import { useIntlMessages, useRequest } from 'hooks';
import { Languages } from 'common/constants';
import { LangContext } from 'common/contexts';
import Button from 'components/button';
import Card from 'components/card';

import { HomeProps, Post } from './home.types';
import { getPostsStart } from './home.actions';
import pureMessages from './home.messages';
import styles from './home.module.scss';

const Home: NextPage<HomeProps> = (props) => {
  const { user } = props;

  const dispatch = useDispatch();
  const { posts } = useSelector((state: GlobalState) => state.home);

  const { isGetPostsLoading } = useRequest(['GET_POSTS']);
  const messages = useIntlMessages(pureMessages);
  const langContext = useContext(LangContext);

  const handleGetMorePosts = () => {
    dispatch(getPostsStart());
  };

  /**
   * Render
   */

  const renderHi = () => <p className={styles.hi}>{`${messages.hi}, ${get(user, 'name')}`}</p>;

  const renderChangeLang = () => {
    const newLang = langContext.usedLang === Languages.EN ? Languages.VI : Languages.EN;
    const switchLang = () => {
      langContext.changeLang(newLang);
    };

    return (
      <Button type="default" onClick={switchLang}>
        {newLang}
      </Button>
    );
  };

  const renderPosts = () => posts.map((post: Post) => <Card key={post.title}>{post.title}</Card>);

  return (
    <>
      <div className={styles.header}>
        {renderHi()}
        <Button type="default" onClick={handleGetMorePosts}>
          {messages.getMore}
        </Button>
        {renderChangeLang()}
      </div>
      <div className={styles['posts-wrapper']}>{renderPosts()}</div>
      {isGetPostsLoading && <div className={styles.loading}>Loading...</div>}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(getPostsStart());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  const user = {
    name: 'Jarvis',
  };

  return {
    props: { user },
  };
});

export default Home;
