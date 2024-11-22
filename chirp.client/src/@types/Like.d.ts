import { Post } from "./Post";

export interface Like {
  id: number;
  userId: number;
  postId: number;
  post: Post[];
}
