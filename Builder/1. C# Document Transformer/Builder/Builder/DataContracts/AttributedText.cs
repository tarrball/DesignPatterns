namespace Builder.DataContracts;

public class AttributedText
{
    public string Text { get; init; }

    public string[] Attributes { get; init; } = Array.Empty<string>();
}