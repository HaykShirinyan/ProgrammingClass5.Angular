using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Repositories.Definitions
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAllAsync();

        Task<Product> GetAsync(int id);

        Task<Product> AddAsync(Product product);

       Task<Product> UpdateAsync(Product product);

        Task<Product> DeleteAsync(int id);
    }
}
