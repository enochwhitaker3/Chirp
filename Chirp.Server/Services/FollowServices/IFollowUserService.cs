using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;

namespace Chirp.Server.Services.FollowServices;

public interface IFollowUserService
{
    public Task<bool> AddFollowing(AddFollowRequest addFollowRequest);
    public Task<List<UserDTO>> GetFollowersByUserId(int id);
    public Task<List<UserDTO>> GetFollowingByUserId(int id);
    public Task<bool> Unfollow(RemoveFollowRequest removeFollowRequest);
}
