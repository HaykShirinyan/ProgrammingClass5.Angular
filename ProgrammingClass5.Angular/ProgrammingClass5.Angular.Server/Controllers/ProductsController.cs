using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.DataTransferObjects;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductRepository _productRepository;
        private IMapper _mapper;

        public ProductsController(IProductRepository productRepository, IMapper mapper) 
        { 
            _productRepository = productRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync() 
        {
            var products = await _productRepository.GetAllAsync();

            var productDtoList = _mapper.Map<List<ProductDto>>(products);

            return Ok(productDtoList);
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(ProductDto product)
        {
            var addedProduct = await _productRepository.AddAsync(_mapper.Map<Product>(product));

            var addedDto = _mapper.Map<ProductDto>(addedProduct);

            return Ok(addedDto);
        }

        // api/products/45
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var product = await _productRepository.GetAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductDto>(product));
        }

        // api/products/78
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, ProductDto product) 
        { 
            if (id != product.Id)
            {
                return BadRequest("ID in the URL must be the same as the ID in the body.");
            }

            var updatedProduct = await _productRepository.UpdateAsync(_mapper.Map<Product>(product));

            return Ok(_mapper.Map<ProductDto>(updatedProduct));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var product = await _productRepository.DeleteAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProductDto>(product));
        }
    }
}
