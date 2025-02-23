using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.DataTransferObjects
{
    public class ManufacturerDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Country { get; set; }

        [Required]
        [StringLength(100)]
        public string City { get; set; }

        [Required]
        [StringLength(100)]
        public string Adress { get; set; }
    }
}
