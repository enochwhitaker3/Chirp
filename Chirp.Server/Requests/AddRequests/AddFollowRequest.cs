namespace Chirp.Server.Requests.AddRequests;

public class AddFollowRequest
{
    public int followedUserId { get; set; }
    public int followingUserId { get; set; }
}
