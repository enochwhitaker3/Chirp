using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;
using Microsoft.EntityFrameworkCore;

namespace Chirp.Server.Services.LikeServices;

public class LikeService : ILikeService
{
    private readonly IDbContextFactory<ChirpDbContext> dbContextFactory;

    public LikeService(IDbContextFactory<ChirpDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<bool> AddLike(AddLikeRequest addLikeRequest)
    {
        var like = new Like();
        like.PostId = addLikeRequest.postId;
        like.UserId = addLikeRequest.userId;

        using var context = await dbContextFactory.CreateDbContextAsync();
        context.Likes.Add(like);
        await context.SaveChangesAsync();

        return true;
    }

    public async Task<List<LikeDTO>> GetLikesByPostId(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var likes = await context.Likes
            .Include(like => like.User)
            .Where(like => like.PostId == id)
            .ToListAsync();

        return likes.Select(like => like.ToDTO()).ToList();
    }

    public async Task<List<LikeDTO>> GetLikesByUserId(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var likes = await context.Likes
            .Include(like => like.Post) 
                .ThenInclude(post => post.User) 
            .Include(like => like.Post)
                .ThenInclude(post => post.Likes) 
            .Include(x => x.User)
            .Where(like => like.UserId == id)
            .ToListAsync();

        return likes.Select(like => like.ToDTO()).ToList();
    }

    public async Task<bool> RemoveLike(RemoveLikeRequest removeLikeRequest)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var like = await context.Likes
            .Where(x => x.User.Id == removeLikeRequest.UserId)
            .Where(x => x.Post.Id == removeLikeRequest.PostId)
            .FirstOrDefaultAsync();

        if (like == null)
        {
            return false;
        }

        try
        {
            var results = context.Likes.Remove(like);
            await context.SaveChangesAsync();
            return true;
        }
        catch
        {
            return false;
        }
    }
}
