using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Repositories.Definitions
{
    public interface IProductRepository
    {
        List<Product> GetAll();

        Product Get(int id);

        Product Add(Product product);

        Product Update(Product product);

        Product Delete(int id);
    }
}
