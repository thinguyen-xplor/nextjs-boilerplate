import React, { FC, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { GlobalState } from 'common/types';
import { Post } from 'entities/post/post.types';
import { getPostsStart } from 'entities/post/post.actions';
import { useIntlMessages, useRequest } from 'hooks';
import { Languages } from 'common/constants';
import { LangContext } from 'common/contexts';
import Button from 'components/button';
import Card from 'components/card';

import { HomeProps } from './home.types';
import pureMessages from './home.messages';
import styles from './home.module.scss';

const Home: FC<HomeProps> = (props) => {
  const { user, initPosts } = props;

  const dispatch = useDispatch();
  const { posts } = useSelector((state: GlobalState) => state.post);

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

  const renderPosts = () => {
    const finalPosts = posts.length === 0 ? initPosts : posts;

    return finalPosts.map((post: Post) => <Card key={post.title}>{post.title}</Card>);
  };

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

Home.propTypes = {
  initPosts: PropTypes.array.isRequired,
};

export default Home;
