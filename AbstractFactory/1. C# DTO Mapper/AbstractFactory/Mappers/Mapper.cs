using AutoMapper;

namespace AbstractFactory.Mappers;

public class Mapper
{
    private readonly IMapper _mapper;

    protected Mapper()
    {
        _mapper = new MapperConfiguration(config =>
            {
                config.CreateMap<ENT.User, DTO.UserBase>();
            })
            .CreateMapper();
    }
    
    public virtual DTO.UserBase[] MapUsers(object source)
    {
        return _mapper.Map<DTO.UserBase[]>(source);
    }
}