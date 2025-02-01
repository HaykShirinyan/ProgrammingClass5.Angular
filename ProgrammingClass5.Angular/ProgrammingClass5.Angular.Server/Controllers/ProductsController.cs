using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository) 
        { 
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetAll() 
        {
            var products = _productRepository.GetAll();
            return Ok(products);
        }

        [HttpPost]
        public IActionResult Add(Product product)
        {
            var addedProduct = _productRepository.Add(product);
            return Ok(addedProduct);
        }

        // api/products/45
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _productRepository.Get(id);

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

            var updatedProduct = _productRepository.Update(product);

            return Ok(updatedProduct);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _productRepository.Delete(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
    }
}
