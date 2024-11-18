export interface AddPostRequest {
  userId: number;
  body: string;
  ParentId: number | null;
  isReply: boolean;
}
