using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Microsoft.AspNetCore.Mvc;

namespace Chirp.Server.Services.UserServices;

public interface IUserService
{
    public Task<List<UserDTO>> GetAllUsers();
    public Task<UserDTO> GetUserByGuid(Guid guid);
    public Task<UserDTO> GetUserByAuthId(string authId);
    public Task<UserDTO> GetUsersByName(string username);
    public Task<UserDTO> UpdateUser(UpdateUserRequest updateUserRequest);
    public Task<bool> AddUser(AddUserRequest addUserRequest);
    public Task<bool> DeleteUserByGuid(Guid userId);
    public Task<string> GetAuthorizedUserEmail();
}


