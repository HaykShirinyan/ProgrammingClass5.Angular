﻿using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.Models
{
    public class Manufacturer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }
    }
}
