﻿using Chirp.Server.DTOs;
using Chirp.Server.Requests.AddRequests;
using Chirp.Server.Requests.UpdateRequests;

namespace Chirp.Server.Services.PostServices;

public interface IPostService
{
    public Task<List<PostDTO>> GetAllPosts();
    public Task<PostDTO> GetPostById(int id);
    public Task<PostDTO> GetPostByUser(UserDTO user);
    public Task<PostDTO> UpdatePost(UpdateUserRequest updateUserRequest);
    public Task<bool> AddPost(AddPostRequest addPostRequest);
    public Task<bool> DeletePostById(int id);
}
