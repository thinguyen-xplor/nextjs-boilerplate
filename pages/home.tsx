import React, { FC } from 'react';
import { GetServerSideProps } from 'next';

import Home from 'pages/home';
import { User } from 'common/types';
import { Post } from 'pages/home/home.types';
import homeServices from 'pages/home/home.services';

export interface HomeProps {
  user: User;
  posts: Post[];
}

const HomePage: FC<HomeProps> = (props) => {
  const { user, posts } = props;

  return <Home user={user} initPosts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const user = {
    name: 'Jarvis',
    email: 'jarvis@gmail.com',
  };

  const { data: posts } = await homeServices.getPosts();

  return {
    props: {
      user,
      posts: posts.slice(0, 20),
    },
  };
};

export default HomePage;
