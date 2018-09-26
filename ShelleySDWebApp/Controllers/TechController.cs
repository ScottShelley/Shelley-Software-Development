using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Amazon.DynamoDBv2;
using ShelleySDWebApp.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ShelleySDWebApp.Core;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShelleySDWebApp.Controllers
{
  [Route("api/[controller]")]
  public class TechController : Controller
  {
    private readonly ITech service;

    public TechController(ITech tech)
		{
      this.service = tech;
    }

    // GET
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var tech = await this.service.GetTechAsync();
        return Ok(tech);
      }
      catch (Exception)
      {
        return BadRequest("Something went wrong!");
      }
    }
  }
}
