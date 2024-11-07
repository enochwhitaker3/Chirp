using System;
using System.Collections.Generic;

namespace Chirp.Server.Data;

public partial class FollowedUser
{
    public int FollowingUserId { get; set; }

    public int FollowedUserId { get; set; }

    public DateTime? FollowedAt { get; set; }

    public virtual UserAccount FollowedUserNavigation { get; set; } = null!;

    public virtual UserAccount FollowingUser { get; set; } = null!;
}
