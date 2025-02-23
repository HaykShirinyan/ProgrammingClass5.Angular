using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.DataTransferObjects;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;
using ProgrammingClass5.Angular.Server.Repositories.Implementations;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/types")]
    [ApiController]
    public class TypesController : ControllerBase
    {
        private IProductTypeRepository  _productTypeRepository;
        private IMapper _mapper;    


        public TypesController(IProductTypeRepository productTypeRepository, IMapper mapper)

        {
            _productTypeRepository = productTypeRepository;
            _mapper = mapper;

        }


        [HttpGet]
        public async Task<IActionResult> GetAllAsync()

        {
            var producttypes = await _productTypeRepository.GetAllAsync();
            var producttypesDtoList= _mapper.Map<List<ProductTypeDto>>(producttypes);
            return Ok(producttypesDtoList);
        }

        [HttpPost]

        public async Task<IActionResult> AddAsync(ProductTypeDto productType)

        {
            var addedproductType = await _productTypeRepository.AddAsync(_mapper.Map<ProductType>(productType));
            var addedDto = _mapper.Map<ProductDto>(addedproductType);

            return Ok(addedDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)

        {
            var producttypes =await _productTypeRepository.GetAsync(id);

            if (producttypes == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductTypeDto>(producttypes));
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, ProductType productType)
        {
            if (id != productType.Id)
            {
                return BadRequest("Id in the URL must be the same as the ID in the body");
            }

            var updatedproductType = await _productTypeRepository.UpdateAsync(productType);
            return Ok(_mapper.Map<ProductTypeDto>(updatedproductType));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var producttypes = await _productTypeRepository.DeleteAsync(id);
            if (producttypes == null)
            {
                return NotFound();
            }
                        
            return Ok(_mapper.Map<ProductTypeDto>(producttypes));
        }

        [HttpDelete("delete-all")]
        public async Task<IActionResult> DeleteAllAsync()
        {
            var producttypes = await _productTypeRepository.GetAllAsync();

            if (producttypes == null || !producttypes.Any())
            {
                return NotFound("No types found to delete.");
            }

           await _productTypeRepository.DeleteAllAsync();
           return Ok(new { message = "All types deleted successfully." });
        }

    }
}
