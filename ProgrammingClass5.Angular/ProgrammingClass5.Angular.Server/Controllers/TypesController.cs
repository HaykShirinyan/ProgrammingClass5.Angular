using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/types")]
    [ApiController]
    public class TypesController : ControllerBase
    {
        private IProductTypeRepository  _productTypeRepository;


        public TypesController(IProductTypeRepository productTypeRepository)

        {
            _productTypeRepository = productTypeRepository;

        }


        [HttpGet]
        public IActionResult GetAll()

        {
            var producttypes = _productTypeRepository.GetAll();
            return Ok(producttypes);
        }

        [HttpPost]

        public IActionResult Add(ProductType productType)

        {
            var addedproductType = _productTypeRepository.Add(productType);

            return Ok(addedproductType);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)

        {
            var producttypes = _productTypeRepository.Get(id);

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

            var updatedproductType = _productTypeRepository.Update(productType);
            return Ok(updatedproductType);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var producttypes = _productTypeRepository.Delete(id);
            if (producttypes == null)
            {
                return NotFound();
            }
                        
            return Ok();
        }
    }
}
