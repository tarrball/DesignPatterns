using Prototype.DataContracts;

namespace Prototype;

public static class PrototypeManager
{
    private static readonly Dictionary<string, Workflow> Prototypes = new();

    public static Workflow Clone(string name)
    {
        if (!Prototypes.ContainsKey(name))
        {
            throw new InvalidOperationException($"A workflow with the name " +
                                                $"'{name}' has not been registered");
        }

        return Mapper.Map<Workflow>(Prototypes[name]);
    }
    
    public static void Register(string name, Workflow workflow)
    {
        if (Prototypes.ContainsKey(name))
        {
            throw new InvalidOperationException($"A workflow with the name " +
                                                $"'{name}' has already been registered");
        }

        Prototypes[name] = workflow;
    }
}