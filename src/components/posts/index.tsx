import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { getPosts } from '../../pages/users/users.services';

interface IPosts {
  posts?: any[];
}

const Posts: NextPage<IPosts> = (props) => {
  const { posts } = props;

  return (
    <>
      <div>List of posts</div>
      <ul>
        {(posts || []).map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getPosts();

  console.log('getServerSideProps in posts');

  return {
    props: { posts: data },
  };
};

export default Posts;
