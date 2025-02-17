using Microsoft.EntityFrameworkCore;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Repositories.Implementations
{
    public class ManufacturerRepository : IManufacturerRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ManufacturerRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Manufacturer>> GetAllAsync()
        {
            return await _dbContext.Manufacturers.ToListAsync();
        }

        public async Task<Manufacturer> GetAsync(int id)
        {
            return await _dbContext.Manufacturers.FindAsync(id);
        }

        public async Task<Manufacturer> AddAsync(Manufacturer manufacturer)
        {
            _dbContext.Manufacturers.Add(manufacturer);
            await _dbContext.SaveChangesAsync();

            return manufacturer;
        }

        public async Task<Manufacturer> UpdateAsync(Manufacturer manufacturer)
        {
            _dbContext.Manufacturers.Update(manufacturer);
            await _dbContext.SaveChangesAsync();

            return manufacturer;
        }

        public async Task<Manufacturer> DeleteAsync(int id)
        {
            var manufacturer = await _dbContext.Manufacturers.FindAsync(id);

            if (manufacturer != null)
            {
                _dbContext.Manufacturers.Remove(manufacturer);
                await _dbContext.SaveChangesAsync();
            }

            return manufacturer;
        }
    }
}