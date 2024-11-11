using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Microsoft.EntityFrameworkCore;

namespace Chirp.Server.Services.PostServices;

public class PostService : IPostService
{
    private readonly IDbContextFactory<ChirpDbContext> dbContextFactory;

    public PostService(IDbContextFactory<ChirpDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<bool> AddPost(AddPostRequest addPostRequest)
    {
        if (addPostRequest.Body == null)
        {
            return false;
        }

        var post = new Post();
        post.UserId = addPostRequest.UserId;
        post.Body = addPostRequest.Body;
        post.IsReply = addPostRequest.IsReply;
        post.ParentPostId = addPostRequest.ParentId;

        using var context = await dbContextFactory.CreateDbContextAsync();
        context.Posts.Add(post);
        await context.SaveChangesAsync();

        return true;
    }

    public Task<bool> DeletePostById(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<PostDTO>> GetAllPosts()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var posts = await context.Posts
            .Select(post => post.ToDTO())
            .ToListAsync();

        return posts;
    }

    public Task<PostDTO> GetPostById(int id)
    {
        throw new NotImplementedException();
    }

    public Task<PostDTO> GetPostByUser(UserDTO user)
    {
        throw new NotImplementedException();
    }

    public Task<PostDTO> UpdatePost(UpdateUserRequest updateUserRequest)
    {
        throw new NotImplementedException();
    }
}
