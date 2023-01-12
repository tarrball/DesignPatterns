using Builder.DataContracts;

namespace Builder.Builders;

public abstract class BuilderBase
{
    public abstract void AddHeading(string text);

    public abstract void AddParagraph(AttributedText[] attributedTexts);
}