using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PatternContexts;

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

    public async Task<List<PostDTO>> GetAllPosts()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var posts = await context.Posts
            .Select(post => post.ToDTO())
            .ToListAsync();

        return posts;
    }

    public async Task<PostDTO> GetPostById(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var post = await context.Posts
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync();

        if(post == null)
        {
            return new PostDTO();
        }

        return post.ToDTO();
    }

    public async Task<List<PostDTO>> GetPostByUserId(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var posts = await context.Posts
            .Where(post => post.UserId == id)  
            .ToListAsync();                    

        return posts.Select(post => post.ToDTO()).ToList();
    }


    public async Task<PostDTO> UpdatePost(UpdatePostRequest updatePostRequest)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var puc = await context.Posts
            .Where(x => x.Id == updatePostRequest.Id)
            .FirstOrDefaultAsync();

        if (puc == null)
        {
            throw new Exception("No post was found with given id");
        }

        puc.Id = updatePostRequest.Id;
        puc.Body = updatePostRequest.Body;
        puc.TimePosted = DateTime.Now;

        context.Posts.Update(puc);
        await context.SaveChangesAsync();
        return puc.ToDTO();
    }

    public async Task<bool> DeletePostById(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var post = await context.Posts
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync();

        if (post == null)
        {
            return false;
        }

        try
        {
            var results = context.Posts.Remove(post);
            await context.SaveChangesAsync();
            return true;
        }
        catch
        {
            return false;
        }
    }
}
