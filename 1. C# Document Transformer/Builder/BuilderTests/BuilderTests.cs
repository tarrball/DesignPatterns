using Builder;
using Shouldly;

namespace BuilderTests;

[TestClass]
public class BuilderTests
{
    [TestMethod]
    public void Markdown_To_HTML()
    {
        const string markdown =
            @"# Hello World

This is just a _little_ text.";

        var builder = new HtmlBuilder();
        MarkdownTranslator.Translate(builder, markdown);

        var html = builder.GetHtml();

        html.Root.Tag.ShouldBe("html");
        html.Root.Children[0].Tag.ShouldBe("body");

        var h1 = html.Root.Children[0].Children[0];
        h1.Tag.ShouldBe("h1");
        h1.Text.ShouldBe("Hello World");

        var p = html.Root.Children[0].Children[1];
        p.Tag.ShouldBe("p");
        p.Children[0].Text.ShouldBe("This is just a ");
        p.Children[2].Text.ShouldBe(" text.");

        var span = p.Children[1];
        span.Tag.ShouldBe("span");
        span.Text.ShouldBe("little");
        span.Classes[0].ShouldBe("i");
    }
}