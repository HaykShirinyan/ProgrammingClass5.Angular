using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.DataTransferObjects
{
    public class ProductTypeDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

    }
}
