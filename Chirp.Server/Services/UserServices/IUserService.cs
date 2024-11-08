using Chirp.Server.DTOs;

namespace Chirp.Server.Services.UserServices;

public interface IUserService
{
    public Task<List<UserDTO>> GetAllUsers();
    public Task<UserDTO> GetUserById(Guid guid);
    public Task<UserDTO> GetUserByAuthId(string authId);
    public Task<bool> DeleteUserById(Guid userId);
    public Task<UserDTO> GetUsersByName(string username);
}


public Task<UserDTO> UpdateUser(UpdateUserRequest updateUserRequest);
public Task<UserDTO> GetUserByAuthId(string authId);
public Task<UserDTO> GetUsersByName(string username);
public Task AddUser(AddUserRequest addUserRequest);