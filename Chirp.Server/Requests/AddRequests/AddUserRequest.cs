﻿namespace Chirp.Server.Requests.AddRequests;

public class AddUserRequest
{
    public string Username { get; set; } = "";
    public string Email { get; set; } = "";
    public string AuthId { get; set; } = "";
}
