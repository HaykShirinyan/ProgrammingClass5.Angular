using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public ProductsController(ApplicationDbContext dbContext) 
        { 
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll() 
        { 
            var products = _dbContext.Products.ToList();
            return Ok(products);
        }

        [HttpPost]
        public IActionResult Add(Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();

            return Ok(product);
        }

        // api/products/45
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _dbContext.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // api/products/78
        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product) 
        { 
            if (id != product.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            _dbContext.Products.Update(product);
            _dbContext.SaveChanges();

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _dbContext.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            _dbContext.Products.Remove(product);
            _dbContext.SaveChanges();

            return Ok(product);
        }
    }
}
