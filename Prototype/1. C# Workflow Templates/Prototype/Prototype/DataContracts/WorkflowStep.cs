namespace Prototype.DataContracts;

public class WorkflowStep
{
    public Guid Id { get; set; }
    
    public WorkflowStepType Type { get; set; }

    public Role[] AvailableRoles { get; set; } = null!;
}