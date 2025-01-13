using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Data.Migrations;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/producttypes")]
    [ApiController]
    public class ProductTypesController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public ProductTypesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _dbContext.ProductTypes.ToList();
            return Ok(productTypes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _dbContext.ProductTypes.Find(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }

        [HttpPost]
        public IActionResult Add(ProductType productType)
        {
            _dbContext.ProductTypes.Add(productType);
            _dbContext.SaveChanges();

            return Ok(productType);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductType productType)
        {
            if (id != productType.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            _dbContext.ProductTypes.Update(productType);
            _dbContext.SaveChanges();

            return Ok(productType);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productType = _dbContext.ProductTypes.Find(id);

            if (productType == null)
            {
                return NotFound();
            }

            _dbContext.ProductTypes.Remove(productType);
            _dbContext.SaveChanges();

            return Ok(productType);
        }
    }
}
