using AbstractFactory.DataContracts.Mobile;
using AutoMapper;

namespace AbstractFactory.Mappers;

public class MobileMapper : Mapper
{
    private readonly IMapper _mapper;

    public MobileMapper()
    {
        _mapper = new MapperConfiguration(config =>
            {
                config.CreateMap<ENT.User, User>()
                    .ForMember(mem => mem.AvatarUrl,
                        opt => opt.MapFrom(
                            user => user.AvatarUrls.SmallUrl));
            })
            .CreateMapper();
    }

    public override User[] MapUsers(object source)
    {
        return _mapper.Map<User[]>(source);
    }
}