namespace AbstractFactory.DataContracts.Web;

public class User : UserBase
{
    public required string[] AvatarUrls { get; init; }
}