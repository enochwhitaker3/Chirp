namespace Chirp.Server.DTOs;

public class UserDTO
{
    public int Id { get; set; }

    public Guid Guid { get; set; }

    public string? AuthId { get; set; }
    public string Username { get; set; } = "";

    public string Email { get; set; } = "";

    public string? UserPFP { get; set; }

    public string? Bio { get; set; }

    public DateTime DateJoined { get; set; }
}
