using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.DataTransferObjects
{
    public class ManufacturerDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }
    }
}
