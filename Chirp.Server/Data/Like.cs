using System;
using System.Collections.Generic;

namespace Chirp.Server.Data;

public partial class Like
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int PostId { get; set; }

    public virtual Post Post { get; set; } = null!;

    public virtual UserAccount User { get; set; } = null!;
}
