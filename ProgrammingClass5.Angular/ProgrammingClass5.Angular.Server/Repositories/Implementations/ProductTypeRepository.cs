using Microsoft.EntityFrameworkCore;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Repositories.Implementations
{
    public class ProductTypeRepository:IProductTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductTypeRepository(ApplicationDbContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public async Task<List<ProductType>> GetAllAsync()
        {
            return await _dbContext.ProductTypes.ToListAsync(); 
        }

        public async Task<ProductType> GetAsync(int id)
        {
            return await _dbContext.ProductTypes.FindAsync(id);
        }

        public async Task<ProductType> AddAsync(ProductType productType)
        {
            _dbContext.ProductTypes.Add(productType);
            await _dbContext.SaveChangesAsync();

            return productType; 
        }

        public async Task<ProductType> UpdateAsync(ProductType productType)
        {
            _dbContext.ProductTypes.Update(productType);
            await _dbContext.SaveChangesAsync();

            return productType; 
        }

        public async Task<ProductType> DeleteAsync(int id)
        {
            var producType = await _dbContext.ProductTypes.FindAsync(id);

            if (producType != null)
            {
                _dbContext.ProductTypes.Remove(producType);
                await _dbContext.SaveChangesAsync();
                return producType;
            }
            return producType;

        }
        public async Task<List<ProductType>> DeleteAllAsync()

            {
                var productType = await _dbContext.ProductTypes.ToListAsync();
                _dbContext.ProductTypes.RemoveRange(productType);
                await _dbContext.SaveChangesAsync();
                return productType;
            }
        
    }
}
