﻿using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass5.Angular.Server.DataTransferObjects
{
    public class ProductDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }
    }
}
