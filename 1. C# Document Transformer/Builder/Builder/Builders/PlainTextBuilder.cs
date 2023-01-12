using Builder.DataContracts;

namespace Builder.Builders;

public class PlainTextBuilder : BuilderBase
{
    private string _text = string.Empty;

    public override void AddHeading(string text)
    {
        AddLine(text);
    }

    public override void AddParagraph(AttributedText[] attributedTexts)
    {
        var text = string.Join(
            string.Empty,
            attributedTexts.Select(at => at.Text).ToArray());

        AddLine(text);
    }

    private void AddLine(string text) => _text += $"{text}\n";

    public string GetText()
    {
        return _text.Trim();
    }
}