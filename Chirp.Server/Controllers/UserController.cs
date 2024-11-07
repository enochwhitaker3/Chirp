using Chirp.Server.DTOs;
using Chirp.Server.Services.UserServices;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Controllers;
[ApiController]
[Route("/[controller]")]
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

    [HttpGet("getallusers")]
    public async Task<List<UserDTO>> GetAllUsers()
    {
        return await userService.GetAllUsers();
    }

}

