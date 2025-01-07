using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/types")]
    [ApiController]
    public class TypesController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public TypesController(ApplicationDbContext dbContext)

        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()

        {
            var producttypes = _dbContext.ProductTypes.ToList();
            return Ok(producttypes);
        }

        [HttpPost]

        public IActionResult Add(ProductType productType)

        {
            _dbContext.ProductTypes.Add(productType);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)

        {
            var producttypes = _dbContext.ProductTypes.Find(id);

            if (producttypes == null)
            {
                return NotFound();
            }

            return Ok(producttypes);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductType productType)
        {
            if (id != productType.Id)
            {
                return BadRequest("Id in the URL must be the same as the ID in the body");
            }

            _dbContext.ProductTypes.Update(productType);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var producttypes = _dbContext.ProductTypes.Find(id);

            if (producttypes == null)
            {
                return NotFound();
            }

            _dbContext.ProductTypes.Remove(producttypes);
            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
