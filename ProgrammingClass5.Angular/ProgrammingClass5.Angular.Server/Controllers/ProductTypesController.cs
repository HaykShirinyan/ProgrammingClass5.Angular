using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.DataTransferObjects;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/productTypes")]
    [ApiController]
    public class ProductTypesController : ControllerBase
    {
        private IProductTypeRepository _productTypeRepository;
        private IMapper _mapper;

        public ProductTypesController(IProductTypeRepository productTypeRepository, IMapper mapper)
        {
            _productTypeRepository = productTypeRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var productTypes = await _productTypeRepository.GetAllAsync();

            var productTypeDtoList = _mapper.Map<List<ProductTypeDto>>(productTypes);

            return Ok(productTypeDtoList);
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(ProductTypeDto productType)
        {
            var addedProductType = await _productTypeRepository.AddAsync(_mapper.Map<ProductType>(productType));

            var addedDto = _mapper.Map<ProductTypeDto>(addedProductType);

            return Ok(addedDto);
        }

        // api/products/45
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var productType = await _productTypeRepository.GetAsync(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductTypeDto>(productType));
        }

        // api/products/78
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, ProductTypeDto productType)
        {
            if (id != productType.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            var updatedProductType = await _productTypeRepository.UpdateAsync(_mapper.Map<ProductType>(productType));

            return Ok(_mapper.Map<ProductTypeDto>(updatedProductType));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var productType = await _productTypeRepository.DeleteAsync(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductTypeDto>(productType));
        }
    }
}
