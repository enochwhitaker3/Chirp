using Chirp.Server.Data;
using Chirp.Server.DTOs;
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
    }
}
