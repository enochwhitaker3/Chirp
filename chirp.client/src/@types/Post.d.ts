import { UserAccount } from "./UserAccount";

export interface Post {
  id: number;
  body: string;
  userId: number;
  timePosted: Date;
  parentPostId: number;
  isReply: boolean;
  username: string;
  userPFP: string;
  likes: UserAccount[];
}
