import httpClient from 'core/http-client';

const getUsers = (): any => httpClient.get('https://jsonplaceholder.typicode.com/users');

const getPosts = (): any => httpClient.get('https://jsonplaceholder.typicode.com/posts');

export { getUsers, getPosts };
