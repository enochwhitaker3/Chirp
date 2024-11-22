using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;
using Chirp.Server.Services.LikeServices;
using Chirp.Server.Services.PostServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class LikeController : ControllerBase
{
    private readonly ILikeService likeService;

    public LikeController(ILikeService likeService)
    {
        this.likeService = likeService;
    }

    [HttpGet("getlikesbyuserid")]
    public async Task<List<LikeDTO>> GetLikesByUserId(int id)
    {
        return await likeService.GetLikesByUserId(id);
    }

    [HttpGet("getlikesbypostid")]
    public async Task<List<LikeDTO>> GetLikesByPostId(int id)
    {
        return await likeService.GetLikesByPostId(id);
    }

    [HttpPost("addlike")]
    public async Task<bool> AddLike([FromBody] AddLikeRequest addLikeRequest)
    {
        return await likeService.AddLike(addLikeRequest);
    }

    [HttpPost("removelike")]
    public async Task<bool> RemoveLike([FromBody] RemoveLikeRequest removeLikeRequest)
    {
        return await likeService.RemoveLike(removeLikeRequest);
    }
}
