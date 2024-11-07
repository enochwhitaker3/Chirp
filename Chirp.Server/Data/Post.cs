using System;
using System.Collections.Generic;

namespace Chirp.Server.Data;

public partial class Post
{
    public int Id { get; set; }

    public string Body { get; set; } = null!;

    public int UserId { get; set; }

    public DateTime? TimePosted { get; set; }

    public int? ParentPostId { get; set; }

    public bool? IsReply { get; set; }

    public virtual ICollection<Post> InverseParentPost { get; set; } = new List<Post>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual Post? ParentPost { get; set; }

    public virtual UserAccount User { get; set; } = null!;
}
