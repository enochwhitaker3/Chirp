namespace Chirp.Server.Requests.UpdateRequests;

public class UpdateUserRequest
{
    public Guid Guid { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? UserPFP { get; set; }
    public string? Banner { get; set; }
    public string? Bio { get; set; }

}
