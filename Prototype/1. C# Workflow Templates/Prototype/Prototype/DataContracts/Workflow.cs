namespace Prototype.DataContracts;

public class Workflow
{
    public Guid Id { get; set; }
    
    public ICollection<WorkflowStep> Steps { get; init; } = null!;
}