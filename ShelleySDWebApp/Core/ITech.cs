using ShelleySDWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShelleySDWebApp.Core
{
    public interface ITech
    {
     Task<IEnumerable<TechModel>> GetTechAsync();
    }
}
