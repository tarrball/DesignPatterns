namespace Builder;

public static class MarkdownTranslator
{
    public static void Translate(BuilderBase builder, string markdown)
    {
        foreach (var block in markdown.Split("\n"))
        {
            switch (block)
            {
                case { } when string.IsNullOrWhiteSpace(block):
                    break;
                case { } when block.StartsWith("# "):
                    AddHeading(builder, block);
                    break;
                default:
                    AddParagraph(builder, block!);
                    break;
            }
        }
    }

    private static void AddHeading(BuilderBase builder, string block)
    {
        builder.AddHeading(block.Remove(0, 2));
    }

    private static void AddParagraph(BuilderBase builder, string block)
    {
        var symbols = new[] { '_' };
        var attributedText = new List<AttributedText>();

        while (block.IndexOfAny(symbols) >= 0)
        {
            var openIndex = block.IndexOfAny(symbols);
            var symbol = block[openIndex];

            if (block.IndexOfAny(symbols, openIndex + 1) >= 0)
            {
                var closeIndex = block.IndexOfAny(symbols, openIndex + 1);

                attributedText.Add(new AttributedText
                {
                    Text = block[..openIndex]
                });

                attributedText.Add(new AttributedText
                {
                    Text = block.Substring(openIndex + 1, closeIndex - openIndex - 1),
                    Attributes = symbol == '_' ? new[] { "italic" } : Array.Empty<string>()
                });

                block = block.Remove(0, closeIndex + 1);
            }
            else
            {
                attributedText.Add(new AttributedText
                {
                    Text = block
                });
            }
        }

        if (block.Length != 0)
        {
            attributedText.Add(new AttributedText
            {
                Text = block
            });
        }

        builder.AddParagraph(attributedText.ToArray());
    }
}