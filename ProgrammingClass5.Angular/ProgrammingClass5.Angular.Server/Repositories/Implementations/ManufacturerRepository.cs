using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Repositories.Implementations
{
    public class ManufacturerRepository:IManufacturerRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ManufacturerRepository(ApplicationDbContext dbContext)
        { 
            _dbContext = dbContext;
        }

        public List<Manufacturer> GetAll()
        { 
            return _dbContext.Manufacturers.ToList();
        }

        public Manufacturer Get(int id) 
        {
            return _dbContext.Manufacturers.Find(id);
        }

        public Manufacturer Add(Manufacturer manufacturer) 
        {
            _dbContext.Manufacturers.Add(manufacturer);
            _dbContext.SaveChanges();

            return manufacturer;
        }

        public Manufacturer Update(Manufacturer manufacturer) 
        {
            _dbContext.Manufacturers.Update(manufacturer);
            _dbContext.SaveChanges();

            return manufacturer;
        }

        public Manufacturer Delete(int id) 
        {
            var manufacturer = _dbContext.Manufacturers.Find(id);
                if(manufacturer != null)
                { 
                  _dbContext.Manufacturers.Remove(manufacturer);
                  _dbContext.SaveChanges();
                }

            return manufacturer;
        }

        public List<Manufacturer> DeleteAll()

        {
            var manufacturers = _dbContext.Manufacturers.ToList(); 
            _dbContext.Manufacturers.RemoveRange(manufacturers);
            _dbContext.SaveChanges();
            return manufacturers;
        }


    }
}
