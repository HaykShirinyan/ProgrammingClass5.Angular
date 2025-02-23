using AutoMapper;
using ProgrammingClass5.Angular.Server.DataTransferObjects;
using ProgrammingClass5.Angular.Server.Models;

namespace ProgrammingClass5.Angular.Server.Mapping
{
    public class PrpductTypeProfile:Profile
    {
        public PrpductTypeProfile()
        {
            CreateMap<ProductType, ProductTypeDto>();
            CreateMap<ProductTypeDto, ProductType>();
        }
    }
}
