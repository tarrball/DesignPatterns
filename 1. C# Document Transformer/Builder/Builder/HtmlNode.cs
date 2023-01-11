namespace Builder;

public class HtmlNode
{
    public string? Tag { get; init; }
    
    public string? Text { get; init; }

    public string[] Classes { get; init; } = Array.Empty<string>();

    public HtmlNode[] Children { get; set; } = Array.Empty<HtmlNode>();
}