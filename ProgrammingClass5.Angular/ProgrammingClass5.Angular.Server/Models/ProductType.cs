using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.Models
{
    public class ProductType
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}