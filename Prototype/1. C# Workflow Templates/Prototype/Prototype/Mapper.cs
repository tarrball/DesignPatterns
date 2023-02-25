using AutoMapper;
using Prototype.DataContracts;

namespace Prototype;

internal static class Mapper
{
    private static readonly MapperConfiguration Configuration = new(config =>
    {
        config
            .CreateMap<Workflow, Workflow>();
        
        config.CreateMap<WorkflowStepBase, WorkflowStepBase>()
            .IncludeAllDerived()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        
        config
            .CreateMap<ApprovalStep, ApprovalStep>();
        
        config
            .CreateMap<FileGenerationStep, FileGenerationStep>();
        
        config
            .CreateMap<RequestStep, RequestStep>();
    });

    // ReSharper disable once InconsistentNaming
    private static readonly IMapper _mapper = Configuration.CreateMapper();

    public static TDestination Map<TDestination>(object source) => _mapper.Map<TDestination>(source);
}