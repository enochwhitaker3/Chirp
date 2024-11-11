namespace Chirp.Server.Requests.AddRequests;

public class AddPostRequest
{
    public int UserId { get; set; }
    public string Body { get; set; } = "";
    public bool? IsReply { get; set; }
    public int? ParentId { get; set; }

}
