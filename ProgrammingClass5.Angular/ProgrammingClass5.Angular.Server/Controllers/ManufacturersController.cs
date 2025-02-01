using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Models;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;
using ProgrammingClass5.Angular.Server.Repositories.Implementations;

namespace ProgrammingClass5.Angular.Server.Controllers
{
    [Route("api/manufacturers")]
    [ApiController]
    public class ManufacturersController : ControllerBase
    {
        private IManufacturerRepository _manufacturerRepository;
        public ManufacturersController(IManufacturerRepository manufacturerRepository)
        {
            _manufacturerRepository = manufacturerRepository;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var manufacturer = _manufacturerRepository.GetAll();
            return Ok(manufacturer);
        }
        [HttpPost]
        public IActionResult Add(Manufacturer manufacturer)
        {
            var addedManufacturer = _manufacturerRepository.Add(manufacturer);
            return Ok(addedManufacturer);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var manufacturer = _manufacturerRepository.Get(id);

            if (manufacturer == null)
            {
                return NotFound();
            }

            return Ok(manufacturer);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, Manufacturer manufacturer)
        {
            if (id != manufacturer.Id)
            {
                return BadRequest("Id in the URL must be the same as the ID in the body");
            }

            var updatedManufacturer = _manufacturerRepository.Update(manufacturer);
            return Ok(updatedManufacturer);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var manufcturer = _manufacturerRepository.Delete(id);

            if (manufcturer == null)
            {
                return NotFound();
            }
            return Ok(manufcturer);
        }
    }
 }