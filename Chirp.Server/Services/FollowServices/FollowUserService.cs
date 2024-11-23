using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;
using Microsoft.EntityFrameworkCore;

namespace Chirp.Server.Services.FollowServices;

public class FollowUserService : IFollowUserService
{
    private readonly IDbContextFactory<ChirpDbContext> dbContextFactory;

    public FollowUserService(IDbContextFactory<ChirpDbContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<bool> AddFollowing(AddFollowRequest addFollowRequest)
    {
        var follow = new FollowedUser
        {
            FollowingUserId = addFollowRequest.followingUserId,
            FollowedUserId = addFollowRequest.followedUserId
        };

        using var context = await dbContextFactory.CreateDbContextAsync();
        context.FollowedUsers.Add(follow);
        await context.SaveChangesAsync();

        return true;
    }

    public async Task<List<UserDTO>> GetFollowersByUserId(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        // Find the followers of a user by their `id`
        var followers = await context.FollowedUsers
            .Where(f => f.FollowedUserId == id)  // Get all FollowedUser entries where the FollowedUserId matches the userId
            .Select(f => f.FollowingUser)  // Select the `FollowingUser` (the user who follows)
            .ToListAsync();

        // Return the corresponding UserAccounts for the users that follow the given userId
        return followers.Select(follow => follow.ToDTO()).ToList();
    }


    public async Task<List<UserDTO>> GetFollowingByUserId(int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var followers = await context.FollowedUsers
            .Where(follow => follow.FollowingUserId == id)
            .Select(f => f.FollowedUserAccount)
            .ToListAsync();

        return followers.Select(follow => follow.ToDTO()).ToList();
    }

    public async Task<bool> Unfollow(RemoveFollowRequest removeFollowRequest)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var follow = await context.FollowedUsers
            .Where(x => x.FollowingUserId == removeFollowRequest.followingUserId)
            .Where(x => x.FollowedUserId == removeFollowRequest.followedUserId)
            .FirstOrDefaultAsync();

        if (follow == null)
        {
            return false;
        }

        try
        {
            var results = context.FollowedUsers.Remove(follow);
            await context.SaveChangesAsync();
            return true;
        }
        catch
        {
            return false;
        }
    }
}
