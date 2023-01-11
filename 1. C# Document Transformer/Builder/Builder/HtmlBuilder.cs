namespace Builder;

public class HtmlBuilder : BuilderBase
{
    private readonly Html _html;

    private readonly HtmlNode _body;

    public HtmlBuilder()
    {
        _body = new HtmlNode
        {
            Tag = "body"
        };

        _html = new Html
        {
            Root = new HtmlNode
            {
                Tag = "html",
                Children = new[]
                {
                    _body
                }
            }
        };
    }

    public override void AddHeading(string text)
    {
        _body.Children = new[]
        {
            new HtmlNode
            {
                Tag = "h1",
                Text = text
            }
        };
    }

    public override void AddParagraph(AttributedText[] text)
    {
        var children = text.Select(child => new HtmlNode
            {
                Tag = child.Attributes.Any() ? "span" : null,
                Text = child.Text,
                Classes = child.Attributes
                    .Select(attr => attr switch
                    {
                        "italic" => "i",
                        _ => string.Empty
                    })
                    .ToArray()
            })
            .ToArray();

        _body.Children = _body.Children
            .Concat(new[]
            {
                new HtmlNode
                {
                    Tag = "p",
                    Children = children
                }
            })
            .ToArray();
    }

    public Html GetHtml()
    {
        return _html;
    }
}