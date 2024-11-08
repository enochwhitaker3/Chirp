using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Chirp.Server.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService userService;

    public UserController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpGet("getuserbyid")]
    public async Task<UserDTO> GetUserById(Guid userId)
    {
        return await userService.GetUserById(userId);
    }

    [HttpGet("getuserbyauthid")]
    public async Task<UserDTO> GetUserByAuthId(string authId)
    {
        return await userService.GetUserByAuthId(authId);
    }


    [HttpGet("getallusers")]
    public async Task<List<UserDTO>> GetAllUsers()
    {
        return await userService.GetAllUsers();
    }

    [HttpGet("getusersbyname")]
    public async Task<UserDTO> GetUsersByName(string username)
    {
        return await userService.GetUsersByName(username);
    }

    [HttpPost("addnewuser")]
    public async Task<bool> AddNewUser([FromBody] AddUserRequest addUserRequest)
    {
        return await userService.AddUser(addUserRequest);
    }

    [HttpDelete("deleteuser")]
    public async Task<bool> DeleteUserById(Guid userId)
    {
        return await userService.DeleteUserById(userId);
    }

    [HttpPatch("updateuser")]
    public async Task<UserDTO> UpdateUser(UpdateUserRequest request)
    {
        return await userService.UpdateUser(request);
    }
}

