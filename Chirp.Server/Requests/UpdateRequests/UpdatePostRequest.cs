namespace Chirp.Server.Requests.UpdateRequests;

public class UpdatePostRequest
{
    public int Id { get; set; }
    public string Body { get; set; } = "";
    public DateTime? TimePosted { get; set; }
}
