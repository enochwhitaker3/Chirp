export interface UserAccount {
  id: number;
  authId: string;
  guid: string;
  username: string;
  email: string;
  bio: string;
  dateJoined: Date;
  userPfp: string;
}

export interface UserAccountContextInterface {
  user: UserAccount | undefined;
  error: string | undefined;
  isLoading: boolean;
}
