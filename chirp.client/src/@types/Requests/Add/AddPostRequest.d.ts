export interface AddPostRequest {
    userId: number;
    body: string
    parentPostId: number;
    isReply: boolean;
}