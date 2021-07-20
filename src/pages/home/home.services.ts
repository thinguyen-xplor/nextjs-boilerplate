import httpClient from 'core/http-client';

const getPosts = (): any => httpClient.get('https://jsonplaceholder.typicode.com/posts');

export default {
  getPosts,
};
