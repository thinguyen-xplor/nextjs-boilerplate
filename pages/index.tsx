import React, { FC } from 'react';
import { GetServerSideProps } from 'next';

import Home from 'pages/home';
import { User } from 'entities/user/user.types';
import postServices from 'entities/post/post.services';
import { Post } from 'entities/post/post.types';

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

  const { data: posts } = await postServices.getPosts();

  return {
    props: {
      user,
      posts: posts.slice(0, 20),
    },
  };
};

export default HomePage;
