using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Chirp.Server.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly IDbContextFactory<ChirpDbContext> dbContextFactory;
        private readonly IHttpContextAccessor httpContextAccessor;

        public UserService(IDbContextFactory<ChirpDbContext> dbContextFactory, IHttpContextAccessor httpContextAccessor)
        {
            this.dbContextFactory = dbContextFactory;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<UserDTO> GetUserByGuid(Guid guid)
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var user = await context.UserAccounts
                .Where(x => x.Guid == guid)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return new UserDTO();
            }

            return user.ToDTO();
        }

        public async Task<List<UserDTO>> GetAllUsers()
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var users = await context.UserAccounts
                .Select(user => user.ToDTO())
                .ToListAsync();

            return users;
        }

        public async Task<UserDTO> GetUserByAuthId(string authId)
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var user = await context.UserAccounts
                .Where(x => x.AuthId == authId)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return new UserDTO();
            }

            return user.ToDTO();
        }

        public async Task<UserDTO> GetUsersByName(string username)
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var user = await context.UserAccounts
                .Where(x => x.Username == username)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return new UserDTO();
            }

            return user.ToDTO();
        }

        public async Task<UserDTO> UpdateUser(UpdateUserRequest updateUserRequest)
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var uuc = await context.UserAccounts
                .Where(x => x.Guid == updateUserRequest.Guid)
                .FirstOrDefaultAsync();

            if (uuc == null)
            {
                throw new Exception("User not found with given id");
            }

            uuc.Username = updateUserRequest.Username ?? uuc.Username;
            uuc.Email = updateUserRequest.Email ?? uuc.Email;
            uuc.Bio = updateUserRequest.Bio;
            uuc.UserPFP = updateUserRequest.UserPFP;
            uuc.Guid = updateUserRequest?.Guid;

            context.UserAccounts.Update(uuc);
            await context.SaveChangesAsync();
            return uuc.ToDTO();

        }

        public async Task<bool> AddUser(AddUserRequest addUserRequest)
        {
            if (addUserRequest.Username == null || addUserRequest.Email == null)
            {
                return false;
            }

            var user = new UserAccount();
            user.Username = addUserRequest.Username;
            user.Email = addUserRequest.Email;
            user.Bio = "";
            user.UserPFP = "https://cdn-icons-png.flaticon.com/512/16925/16925339.png";
            user.Guid = Guid.NewGuid();
            user.AuthId = addUserRequest.AuthId;

            using var context = await dbContextFactory.CreateDbContextAsync();
            context.UserAccounts.Add(user);
            await context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteUserByGuid(Guid userId)
        {
            using var context = await dbContextFactory.CreateDbContextAsync();

            var user = await context.UserAccounts
                .Where(x => x.Guid == userId)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return false;
            }

            try
            {
                var result = context.UserAccounts.Remove(user);
                await context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public async Task<string> GetAuthorizedUserEmail()
        {
            var userClaims = httpContextAccessor.HttpContext?.User;

            if (userClaims?.Identity?.IsAuthenticated == true)
            {
                var emailClaim = userClaims?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
                return emailClaim?.Value ?? "Email not found";
            }

            return "Email not found";
        }
    }
}
