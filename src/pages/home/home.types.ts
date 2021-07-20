import { User } from 'entities/user/user.types';
import { Post } from 'entities/post/post.types';

export interface HomeProps {
  user: User;
  initPosts: Post[];
}
