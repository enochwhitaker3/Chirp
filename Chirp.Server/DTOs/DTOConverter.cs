using Chirp.Server.Data;
using Microsoft.Extensions.Hosting;

namespace Chirp.Server.DTOs;

public static class DTOConverter
{
    public static UserDTO ToDTO(this UserAccount user)
    {
        if (user is null)
        {
            return new UserDTO();
        }

        return new UserDTO()
        {
            Id = user.Id,
            AuthId = user.AuthId,
            Username = user.Username,
            Bio = user.Bio,
            Email = user.Email ?? "",
            UserPFP = user.UserPFP,
            Banner = user.Banner,
            DateJoined = user.DateJoined,
            Guid = user.Guid ?? new Guid()
        };
    }

    public static PostDTO ToDTO(this Post post)
    {
        if (post is null)
        {
            return new PostDTO();
        }

        return new PostDTO()
        {
            Id = post.Id,
            UserId = post.UserId,
            Body = post.Body,
            IsReply = post.IsReply,
            ParentPostId = post.ParentPostId,
            TimePosted = post.TimePosted,
            Username = post.User.Username,
            UserPFP = post.User.UserPFP ?? "",
            Likes = post.Likes.Select(like => like.User.ToDTO()).ToList()
        };
    }

    public static LikeDTO ToDTO(this Like like)
    {
        if (like is null)
        {
            return new LikeDTO();
        }

        return new LikeDTO()
        {
            Id = like.Id,
            UserId = like.UserId,
            PostId = like.PostId,
            Post = like.Post.ToDTO()
        };
    }
}
