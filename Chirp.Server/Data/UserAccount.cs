using System;
using System.Collections.Generic;

namespace Chirp.Server.Data;

public partial class UserAccount
{
    public int Id { get; set; }

    public Guid? Guid { get; set; }

    public string? AuthId { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? UserPFP { get; set; }

    public string? Bio { get; set; }

    public DateTime DateJoined { get; set; }

    public virtual ICollection<FollowedUser> FollowedUserFollowedUserNavigations { get; set; } = new List<FollowedUser>();

    public virtual ICollection<FollowedUser> FollowedUserFollowingUsers { get; set; } = new List<FollowedUser>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();

    public virtual ICollection<UserAccount> BlockedUsers { get; set; } = new List<UserAccount>();

    public virtual ICollection<UserAccount> BlockerUsers { get; set; } = new List<UserAccount>();
}
