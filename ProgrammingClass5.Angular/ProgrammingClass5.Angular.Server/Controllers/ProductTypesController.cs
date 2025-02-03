using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Data.Migrations;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/productTypes")]
    [ApiController]
    public class ProductTypesController : ControllerBase
    {
        private IProductTypeRepository _productTypeRepository;

        public ProductTypesController(IProductTypeRepository productTypeRepository)
        {
            _productTypeRepository = productTypeRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _productTypeRepository.GetAll();
            return Ok(productTypes);
        }

        [HttpPost]
        public IActionResult Add(ProductType productType)
        {
            var addedProductType = _productTypeRepository.Add(productType);
            return Ok(addedProductType);
        }

        // api/products/45
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _productTypeRepository.Get(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }

        // api/products/78
        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductType productType)
        {
            if (id != productType.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            var updatedProductType = _productTypeRepository.Update(productType);

            return Ok(updatedProductType);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productType = _productTypeRepository.Delete(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }
    }
}
