using Chirp.Server.Data;
using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chirp.Server.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly IDbContextFactory<ChirpDbContext> dbContextFactory;

        public UserService(IDbContextFactory<ChirpDbContext> dbContextFactory)
        {
            this.dbContextFactory = dbContextFactory;
        }

        public async Task<UserDTO> GetUserById(Guid guid)
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

        public Task<UserDTO> GetUserByAuthId(string authId)
        {
            throw new NotImplementedException();
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
            uuc.UserPfp = updateUserRequest.UserPFP;
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
            user.UserPfp = "https://cdn-icons-png.flaticon.com/512/16925/16925339.png";
            user.Guid = Guid.NewGuid();
            user.AuthId = null;

            using var context = await dbContextFactory.CreateDbContextAsync();
            context.UserAccounts.Add(user);
            await context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteUserById(Guid userId)
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
    }
}
