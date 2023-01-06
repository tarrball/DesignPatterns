using AbstractFactory.Mappers;

namespace AbstractFactory;

public class UserService
{
    private readonly ENT.User[] Users =
    {
        new()
        {
            FirstName = "Andrew",
            LastName = "Tarr",
            AvatarUrls = new ENT.AvatarUrls
            {
                SmallUrl = "https://tarrball.io/tarr-sm.png",
                MediumUrl = "https://tarrball.io/tarr-md.png",
                LargeUrl = "https://tarrball.io/tarr-lg.png",
            }
        }
    };

    private readonly Mapper _mapper;

    public UserService(Mapper mapper)
    {
        _mapper = mapper;
    }

    public DTO.UserBase[] List()
    {
        return _mapper.MapUsers(Users);
    }
}