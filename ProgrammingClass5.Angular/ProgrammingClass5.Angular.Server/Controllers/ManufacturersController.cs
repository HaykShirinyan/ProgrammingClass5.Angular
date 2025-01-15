using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/manufacturers")]
    [ApiController]
    public class ManufacturersController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public ManufacturersController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var manufacturers = _dbContext.Manufacturers.ToList();
            return Ok(manufacturers);
        }

        [HttpPost]
        public IActionResult Add(Manufacturer manufacturer)
        {
            _dbContext.Manufacturers.Add(manufacturer);
            _dbContext.SaveChanges();

            return Ok(manufacturer);
        }

        // api/manufacturers/45
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var manufacturer = _dbContext.Manufacturers.Find(id);

            if (manufacturer == null)
            {
                return NotFound();
            }

            return Ok(manufacturer);
        }

        // api/manufacturers/78
        [HttpPut("{id}")]
        public IActionResult Update(int id, Manufacturer manufacturer)
        {
            if (id != manufacturer.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            _dbContext.Manufacturers.Update(manufacturer);
            _dbContext.SaveChanges();

            return Ok(manufacturer);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var manufacturer = _dbContext.Manufacturers.Find(id);

            if (manufacturer == null)
            {
                return NotFound();
            }

            _dbContext.Manufacturers.Remove(manufacturer);
            _dbContext.SaveChanges();

            return Ok(manufacturer);
        }
    }
}
