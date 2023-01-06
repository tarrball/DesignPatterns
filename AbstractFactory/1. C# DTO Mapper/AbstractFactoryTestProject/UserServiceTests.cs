using AbstractFactory;
using AbstractFactory.Mappers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AbstractFactoryTestProject;

[TestClass]
public class UserServiceTests
{
    [TestMethod]
    public void Mobile()
    {
        var service = new UserService(new MobileMapper());
        var users = service.List();

        Assert.IsInstanceOfType(
            users,
            typeof(AbstractFactory.DataContracts.Mobile.User[])
        );
    }

    [TestMethod]
    public void Web()
    {
        var service = new UserService(new WebMapper());
        var users = service.List();

        Assert.IsInstanceOfType(
            users,
            typeof(AbstractFactory.DataContracts.Web.User[])
        );
    }
}