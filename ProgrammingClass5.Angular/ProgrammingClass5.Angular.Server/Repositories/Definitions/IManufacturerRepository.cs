using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Repositories.Definitions
{
    public interface IManufacturerRepository
    {
        List<Manufacturer> GetAll();

        Manufacturer Get(int id);   

        Manufacturer Add(Manufacturer manufacturer);

        Manufacturer Update(Manufacturer manufacturer);

        Manufacturer Delete(int id);

        List<Manufacturer> DeleteAll();
    }
}
