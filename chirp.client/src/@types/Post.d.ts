export interface Post {
  id: number;
  body: string;
  userId: number;
  timePosted: Date;
  parentPostId: number;
  isReply: boolean;
  username: string;
  userPfp: string;
}
