using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;
using Chirp.Server.Services.FollowServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class FollowController : ControllerBase
{
    private readonly IFollowUserService followService;

    public FollowController(IFollowUserService followService)
    {
        this.followService = followService;
    }

    [HttpGet("getfollowersbyuserid")]
    public async Task<List<UserDTO>> GetFollowersByUserId(int id)
    {
        return await followService.GetFollowersByUserId(id);
    }

    [HttpGet("getfollowingbyuserid")]
    public async Task<List<UserDTO>> GetFollowingByUserId(int id)
    {
        return await followService.GetFollowingByUserId(id);
    }

    [HttpPost("addfollow")]
    public async Task<bool> AddFollow([FromBody] AddFollowRequest addFollowRequest)
    {
        return await followService.AddFollowing(addFollowRequest);
    }

    [HttpPost("unfollow")]
    public async Task<bool> UnFollow([FromBody] RemoveFollowRequest removeFollowRequest)
    {
        return await followService.Unfollow(removeFollowRequest);
    }
}
