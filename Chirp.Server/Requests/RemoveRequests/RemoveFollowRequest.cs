namespace Chirp.Server.Requests.RemoveRequests;

public class RemoveFollowRequest
{
    public int followedUserId { get; set; }
    public int followingUserId { get; set; }
}
