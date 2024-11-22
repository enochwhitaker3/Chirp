namespace Chirp.Server.DTOs;

public class LikeDTO
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int PostId { get; set; }
    public PostDTO Post { get; set; }
}
