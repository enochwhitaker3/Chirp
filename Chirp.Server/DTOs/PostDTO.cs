namespace Chirp.Server.DTOs;

public class PostDTO
{
    public int Id { get; set; }

    public string Body { get; set; } = "";

    public int UserId { get; set; }

    public DateTime? TimePosted { get; set; }

    public int? ParentPostId { get; set; }

    public bool? IsReply { get; set; }
    public string Username { get; set; } = "";
    public string UserPFP { get; set; } = "";
    public List<UserDTO> Likes { get; set; }
}
