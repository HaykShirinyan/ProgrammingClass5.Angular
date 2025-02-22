
using Microsoft.EntityFrameworkCore;
using ProgrammingClass5.Angular.Server.Data;
using ProgrammingClass5.Angular.Server.Mapping;
using ProgrammingClass5.Angular.Server.Repositories.Definitions;
using ProgrammingClass5.Angular.Server.Repositories.Implementations;

namespace ProgrammingClass5.Angular.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            builder.Services.AddAutoMapper(typeof(ProductProfile).Assembly);

            builder.Services.AddTransient<IProductRepository, ProductRepository>();
            builder.Services.AddTransient<IManufacturerRepository, ManufacturerRepository>();
            builder.Services.AddTransient<IProductTypeRepository, ProductTypeRepository>();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
