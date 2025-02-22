using Microsoft.EntityFrameworkCore;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Repositories.Implementations
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public async Task<Product> GetAsync(int id)
        {
            return await _dbContext.Products.FindAsync(id);
        }

        public async Task<Product> AddAsync(Product product)
        {
            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();

            return product;
        }

        public async Task<Product> UpdateAsync(Product product)
        {
            _dbContext.Products.Update(product);
            await _dbContext.SaveChangesAsync();

            return product;
        }

        public async Task<Product> DeleteAsync(int id)
        {
            var product = await _dbContext.Products.FindAsync(id);

            if (product != null)
            {
                _dbContext.Products.Remove(product);
                await _dbContext.SaveChangesAsync();
            }

            return product;
        }
    }
}
