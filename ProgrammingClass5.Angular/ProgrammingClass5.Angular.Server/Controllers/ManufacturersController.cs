using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.DataTransferObjects;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/manufacturers")]
    [ApiController]
    public class ManufacturersController : ControllerBase
    {
        private IManufacturerRepository _manufacturerRepository;
        private IMapper _mapper;    

        public object ManufacturerDto { get; private set; }

        public ManufacturersController(IManufacturerRepository manufacturerRepository, IMapper mapper)
        {
            _manufacturerRepository = manufacturerRepository;
            _mapper = mapper;

        }

        [HttpGet]

        public async Task<IActionResult> GetAllAsync()

        {
            var manufacturers = await _manufacturerRepository.GetAllAsync();
            var manufacturerDtoList = _mapper.Map<List<ManufacturerDto>>(manufacturers);


            return Ok(manufacturerDtoList);
        }

        [HttpPost]

        public async Task<IActionResult> AddAsync(ManufacturerDto manufacturer)
        {
           var addedManufacturer = await _manufacturerRepository.AddAsync(_mapper.Map<Manufacturer>(manufacturer));
            var addedDto = _mapper.Map<ManufacturerDto>(addedManufacturer);

            return Ok(addedDto);

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var manufacturer = await _manufacturerRepository.GetAsync(id);     

            if (manufacturer == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ManufacturerDto>(manufacturer)); 
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, Manufacturer manufacturer)
        {
            if (id != manufacturer.Id)
            {
                return BadRequest("Id in the URL must be the same as the ID in the body");
            }

            var updateManufacturer = await _manufacturerRepository.UpdateAsync(manufacturer);

            return Ok(_mapper.Map<ManufacturerDto>(updateManufacturer));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var manufacturer = await _manufacturerRepository.DeleteAsync(id);  

            if (manufacturer == null)
            { 
               return NotFound();
            }

            return Ok(_mapper.Map<ManufacturerDto>(manufacturer));
        }

        [HttpDelete("delete-all")]
        public async Task<IActionResult> DeleteAllAsync()
        {
            var manufacturers = await _manufacturerRepository.GetAllAsync();

            if (manufacturers == null || !manufacturers.Any())
            {
                return NotFound("No manufacturers found to delete.");
            }

           await _manufacturerRepository.DeleteAllAsync();
            return Ok(new { message = "All manufacturers deleted successfully." });
        }


    }
}
