using AutoMapper;
using Prototype.DataContracts;

namespace Prototype;

internal static class Mapper
{
    private static readonly MapperConfiguration Configuration = new(config =>
    {
        config.CreateMap<WorkflowStep, WorkflowStep>();
        config.CreateMap<Workflow, Workflow>();
    });

    // ReSharper disable once InconsistentNaming
    private static readonly IMapper _mapper = Configuration.CreateMapper();

    public static TDestination Map<TDestination>(object source) => _mapper.Map<TDestination>(source);
}