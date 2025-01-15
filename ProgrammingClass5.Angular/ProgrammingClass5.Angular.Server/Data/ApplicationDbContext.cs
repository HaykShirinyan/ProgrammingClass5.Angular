using Microsoft.EntityFrameworkCore;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options) 
        {         
        }
    }
}
