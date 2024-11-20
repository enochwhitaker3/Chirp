using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;

namespace Chirp.Server.Services.PostServices;

public interface IPostService
{
    public Task<List<PostDTO>> GetAllPosts();
    public Task<PostDTO> GetPostById(int id);
    public Task<List<PostDTO>> GetPostByUserId(int id);
    public Task<List<PostDTO>> GetAllRepliesToPost(int parentId);
    public Task<List<PostDTO>> GetRepliesByUserId(int id);
    public Task<PostDTO> UpdatePost(UpdatePostRequest updatePostRequest);
    public Task<bool> AddPost(AddPostRequest addPostRequest);
    public Task<bool> DeletePostById(int id);
}
