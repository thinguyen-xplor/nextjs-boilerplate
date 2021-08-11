import React from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps, NextPage } from 'next';

import { getUsers } from './users.services';

const Posts = dynamic(() => import('../../components/posts/index'), {
  loading: () => <p>Posts are loading...</p>,
  ssr: false,
});

interface IUsers {
  users: any[];
}

const Users: NextPage<IUsers> = (props) => {
  const { users } = props;

  return (
    <>
      <div>This is users page</div>
      <ul>
        {users.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <hr />
      <Posts />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: users } = await getUsers();

  console.log('getServerSideProps in users');

  return {
    props: { users },
  };
};

export default Users;
