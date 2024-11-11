using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Chirp.Server.Services.PostServices;
using Chirp.Server.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;
[ApiController]
[Route("[controller]")]
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

    [HttpGet("getpostsbyid")]
    public async Task<PostDTO> GetPostsById(int id)
    {
        return await postService.GetPostById(id);
    }

    [HttpGet("getpostsbyuserid")]
    public async Task<List<PostDTO>> GetPostsByUserId(int id)
    {
        return await postService.GetPostByUserId(id);
    }

    [HttpPost("addnewpost")]
    public async Task<bool> AddNewPost([FromBody] AddPostRequest addPostRequest)
    {
        return await postService.AddPost(addPostRequest);
    }

    [HttpPatch("updatepost")]
    public async Task<PostDTO> UpdatePost(UpdatePostRequest request)
    {
        return await postService.UpdatePost(request);
    }

    [HttpDelete("deletepost")]
    public async Task<bool> DeletePost(int id)
    {
        return await postService.DeletePostById(id);
    }


}
