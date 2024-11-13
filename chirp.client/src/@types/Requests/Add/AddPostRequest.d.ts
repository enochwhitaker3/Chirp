export interface AddPostRequest {
  userId: number;
  body: string;
  parentPostId: number | null;
  isReply: boolean;
}
