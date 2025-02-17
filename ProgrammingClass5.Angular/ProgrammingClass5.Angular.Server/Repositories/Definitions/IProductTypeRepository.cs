using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Repositories.Definitions
{
    public interface IProductTypeRepository
    {
        Task<List<ProductType>> GetAllAsync();

        Task<ProductType> GetAsync(int id);

        Task<ProductType> AddAsync(ProductType productType);

        Task<ProductType> UpdateAsync(ProductType productType);

        Task<ProductType> DeleteAsync(int id);
    }
}
