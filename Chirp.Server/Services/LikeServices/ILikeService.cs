using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.RemoveRequests;

namespace Chirp.Server.Services.LikeServices;

public interface ILikeService
{
    public Task<bool> AddLike(AddLikeRequest addLikeRequest);
    public Task<List<LikeDTO>> GetLikesByUserId(int id);
    public Task<List<LikeDTO>> GetLikesByPostId(int id);
    public Task<bool> RemoveLike(RemoveLikeRequest removeLikeRequest);
}
