using Chirp.Server.Data;

namespace Chirp.Server.DTOs;

public static class DTOConverter
{
    public static UserDTO ToDTO(this UserAccount user)
    {
        if (user is null)
        {
            return new UserDTO();
        }

        return new UserDTO()
        {
            Id = user.Id,
            AuthId = user.AuthId,
            Username = user.Username,
            Bio = user.Bio,
            Email = user.Email ?? "",
            UserPFP = user.UserPfp,
            DateJoined = user.DateJoined,
            Guid = user.Guid ?? new Guid()
        };
    }
}
