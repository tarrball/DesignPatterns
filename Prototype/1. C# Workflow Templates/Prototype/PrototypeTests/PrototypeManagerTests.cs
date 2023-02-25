using Prototype.DataContracts;
using Shouldly;
using static Prototype.PrototypeManager;

namespace PrototypeTests;

[TestClass]
public class PrototypeManagerTests
{
    [TestMethod]
    public void RegisterRuntimePrototypes()
    {
        var workflow = new Workflow
        {
            Steps = new WorkflowStepBase[]
            {
                new RequestStep(),
                new FileGenerationStep(),
                new ApprovalStep(),
                new ApprovalStep()
            }
        }; 
        
        Register("double-approval", workflow);

        var clone1 = Clone("double-approval");
        var clone2 = Clone("double-approval");

        // Step order and type are preserved
        clone1.Steps[0].ShouldBeOfType<RequestStep>();
        clone1.Steps[1].ShouldBeOfType<FileGenerationStep>();
        clone1.Steps[2].ShouldBeOfType<ApprovalStep>();
        clone1.Steps[3].ShouldBeOfType<ApprovalStep>();
        
        // Each clone is a new, deep copy
        clone1.Steps[0].Id.ShouldNotBe(workflow.Steps[0].Id);
        clone1.Steps[0].Id.ShouldNotBe(clone2.Steps[0].Id);
    }
}