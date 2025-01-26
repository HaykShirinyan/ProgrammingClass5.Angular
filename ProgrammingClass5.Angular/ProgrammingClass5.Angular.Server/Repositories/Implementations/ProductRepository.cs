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

        public List<Product> GetAll()
        {
            return _dbContext.Products.ToList();
        }

        public Product Get(int id)
        {
            return _dbContext.Products.Find(id);
        }

        public Product Add(Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();

            return product;
        }

        public Product Update(Product product)
        {
            _dbContext.Products.Update(product);
            _dbContext.SaveChanges();

            return product;
        }

        public Product Delete(int id)
        {
            var product = _dbContext.Products.Find(id);

            if (product != null)
            {
                _dbContext.Products.Remove(product);
                _dbContext.SaveChanges();
            }

            return product;
        }
    }
}
