using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Services.PostServices;
using Chirp.Server.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;

public class PostController : ControllerBase
{
    private readonly IPostService postService;

    public PostController(IPostService postService)
    {
        this.postService = postService;
    }

    [HttpGet("getallposts")]
    public async Task<List<PostDTO>> GetAllPosts()
    {
        return await postService.GetAllPosts();
    }

    [HttpPost("addnewpost")]
    public async Task<bool> AddNewPost([FromBody] AddPostRequest addPostRequest)
    {
        return await postService.AddPost(addPostRequest);
    }
}
