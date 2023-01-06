using AbstractFactory.DataContracts.Web;
using AutoMapper;

namespace AbstractFactory.Mappers;

public class WebMapper : Mapper
{
    private readonly IMapper _mapper;

    public WebMapper()
    {
        _mapper = new MapperConfiguration(config =>
            {
                config.CreateMap<ENT.User, User>()
                    .ForMember(mem => mem.AvatarUrls,
                        opt => opt.MapFrom(user => new[]
                        {
                            user.AvatarUrls.SmallUrl,
                            user.AvatarUrls.MediumUrl,
                            user.AvatarUrls.LargeUrl,
                        }));
            })
            .CreateMapper();
    }

    public override User[] MapUsers(object source)
    {
        return _mapper.Map<User[]>(source);
    }
}