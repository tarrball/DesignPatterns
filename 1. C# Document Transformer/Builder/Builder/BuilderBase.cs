namespace Builder;

public abstract class BuilderBase
{
    public abstract void AddHeading(string text);

    public abstract void AddParagraph(AttributedText[] text);
}