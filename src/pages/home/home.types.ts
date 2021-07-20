import { User } from 'common/types';

export interface Post {
  title: string;
}

export interface HomeState {
  posts: Post[];
}

export interface HomeProps {
  user: User;
  initPosts: Post[];
}
