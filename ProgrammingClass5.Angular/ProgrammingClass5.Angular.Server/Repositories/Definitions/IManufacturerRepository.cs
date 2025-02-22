using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Repositories.Definitions
{
    public interface IManufacturerRepository
    {
        Task<List<Manufacturer>> GetAllAsync();

        Task<Manufacturer> GetAsync(int id);

        Task<Manufacturer> AddAsync(Manufacturer manufacturer);

        Task<Manufacturer> UpdateAsync(Manufacturer manufacturer);

        Task<Manufacturer> DeleteAsync(int id);
    }
}
