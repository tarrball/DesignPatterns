namespace AbstractFactory.Entities;

public class User
{
    public required string FirstName { get; init; }

    public required string LastName { get; init; }

    public required AvatarUrls AvatarUrls { get; init; }
}