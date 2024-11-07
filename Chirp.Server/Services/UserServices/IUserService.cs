using Chirp.Server.DTOs;

namespace Chirp.Server.Services.UserServices;

public interface IUserService
{
    public Task<UserDTO> GetUserById(Guid guid);

    public Task<List<UserDTO>> GetAllUsers();
}
